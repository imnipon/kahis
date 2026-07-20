const { exec } = require('child_process');
const net = require('net');
const os = require('os');
const { networkInterfaces } = os;
const { getMacVendor } = require('./oui-db');

const COMMON_PORTS = [
  { port: 22, name: 'SSH' },
  { port: 23, name: 'Telnet' },
  { port: 25, name: 'SMTP' },
  { port: 53, name: 'DNS' },
  { port: 80, name: 'HTTP' },
  { port: 110, name: 'POP3' },
  { port: 135, name: 'MS-RPC' },
  { port: 139, name: 'NetBIOS' },
  { port: 143, name: 'IMAP' },
  { port: 161, name: 'SNMP' },
  { port: 443, name: 'HTTPS' },
  { port: 445, name: 'SMB' },
  { port: 515, name: 'LPD (Printer)' },
  { port: 631, name: 'IPP (Printer)' },
  { port: 993, name: 'IMAPS' },
  { port: 995, name: 'POP3S' },
  { port: 1433, name: 'MSSQL' },
  { port: 1521, name: 'Oracle' },
  { port: 3306, name: 'MySQL' },
  { port: 3389, name: 'RDP' },
  { port: 5432, name: 'PostgreSQL' },
  { port: 5900, name: 'VNC' },
  { port: 8080, name: 'HTTP-Alt' },
  { port: 8443, name: 'HTTPS-Alt' },
  { port: 9090, name: 'WebSocket' },
  { port: 9100, name: 'JetDirect (Printer)' },
];

const PRINTER_PORTS = [9100, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009, 631, 515];

function getLocalNetworkInfo() {
  const nets = networkInterfaces();
  const results = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        results.push({ interface: name, address: net.address, netmask: net.netmask, mac: net.mac });
      }
    }
  }
  return results;
}

function getLocalMacs() {
  const nets = networkInterfaces();
  const map = {};
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal && net.mac && net.mac !== '00:00:00:00:00:00') {
        map[net.address] = net.mac.toLowerCase();
      }
    }
  }
  return map;
}

function netmaskToCIDR(netmask) {
  const parts = netmask.split('.').map(Number);
  let cidr = 0;
  for (const part of parts) {
    cidr += (part.toString(2).match(/1/g) || []).length;
  }
  return cidr;
}

function getSubnetBase(ip, netmask) {
  const ipParts = ip.split('.').map(Number);
  const maskParts = netmask.split('.').map(Number);
  return ipParts.map((part, i) => part & maskParts[i]).join('.');
}

function guessOSFromTTL(ttl) {
  if (ttl === null || ttl === undefined) return null;
  if (ttl >= 100 && ttl <= 130) return 'Windows';
  return 'Linux';
}

function pingIP(ip) {
  return new Promise((resolve) => {
    const isWin = process.platform === 'win32';
    const cmd = isWin ? `ping -n 1 -w 1000 ${ip}` : `ping -c 1 -W 1 ${ip}`;

    exec(cmd, (error, stdout) => {
      if (error) {
        resolve({ ip, alive: false, latency: null, ttl: null });
        return;
      }

      let latency = null;
      let ttl = null;

      if (isWin) {
        const latMatch = stdout.match(/time[=<](\d+)ms/i);
        if (latMatch) latency = parseInt(latMatch[1]);
        const ttlMatch = stdout.match(/ttl=(\d+)/i);
        if (ttlMatch) ttl = parseInt(ttlMatch[1]);
      } else {
        const latMatch = stdout.match(/time=([\d.]+)\s*ms/i);
        if (latMatch) latency = parseFloat(latMatch[1]);
        const ttlMatch = stdout.match(/ttl=(\d+)/i);
        if (ttlMatch) ttl = parseInt(ttlMatch[1]);
      }

      resolve({ ip, alive: true, latency, ttl });
    });
  });
}

function getArpTable() {
  return new Promise((resolve) => {
    const isWin = process.platform === 'win32';
    const cmd = 'arp -a';

    exec(cmd, (error, stdout) => {
      if (error) { resolve([]); return; }

      const entries = [];
      for (const line of stdout.split('\n')) {
        const trimmed = line.trim();
        if (isWin) {
          const match = trimmed.match(/^(\d+\.\d+\.\d+\.\d+)\s+([0-9a-fA-F-]+)\s+(dynamic|static)/i);
          if (match) {
            entries.push({ ip: match[1], mac: match[2].replace(/-/g, ':').toLowerCase(), type: match[3].toLowerCase() });
          }
        } else {
          const match = trimmed.match(/^(\d+\.\d+\.\d+\.\d+)\s+ether\s+([0-9a-fA-F:]+)/i);
          if (match) {
            entries.push({ ip: match[1], mac: match[2].toLowerCase(), type: 'dynamic' });
          }
        }
      }
      resolve(entries);
    });
  });
}

async function resolveHostname(ip) {
  return new Promise((resolve) => {
    const isWin = process.platform === 'win32';
    const cmd = isWin ? `ping -n 1 -a ${ip}` : `host ${ip}`;

    exec(cmd, { timeout: 3000 }, (error, stdout) => {
      if (error) { resolve(null); return; }
      let hostname = null;
      if (isWin) {
        const match = stdout.match(/Pinging\s+(\S+)\s+\[/i);
        if (match && match[1] !== ip) hostname = match[1];
      } else {
        const match = stdout.match(/domain name pointer\s+(\S+)\./i);
        if (match) hostname = match[1];
      }
      resolve(hostname);
    });
  });
}

function scanPort(ip, port, timeout = 1000) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(timeout);
    let done = false;

    socket.on('connect', () => {
      if (!done) { done = true; socket.destroy(); resolve(true); }
    });
    socket.on('timeout', () => {
      if (!done) { done = true; socket.destroy(); resolve(false); }
    });
    socket.on('error', () => {
      if (!done) { done = true; socket.destroy(); resolve(false); }
    });
    socket.connect(port, ip);
  });
}

async function scanPorts(ip) {
  const openPorts = [];
  const results = await Promise.all(
    COMMON_PORTS.map(async ({ port, name }) => {
      const isOpen = await scanPort(ip, port);
      return isOpen ? { port, name } : null;
    })
  );
  for (const r of results) {
    if (r) openPorts.push(r);
  }
  return openPorts;
}

function getNetBIOSInfo(ip) {
  return new Promise((resolve) => {
    const isWin = process.platform === 'win32';
    if (!isWin) { resolve(null); return; }

    exec(`nbtstat -A ${ip}`, { timeout: 5000 }, (error, stdout) => {
      if (error) { resolve(null); return; }

      let hostname = null;
      let workgroup = null;
      let mac = null;

      const lines = stdout.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        const nameMatch = trimmed.match(/^\s*([^\s]+)\s+<00>\s+UNIQUE\s+([^\s]+)/i);
        if (nameMatch && !hostname) hostname = nameMatch[1];
        const groupMatch = trimmed.match(/^\s*([^\s]+)\s+<00>\s+GROUP\s+([^\s]+)/i);
        if (groupMatch && !workgroup) workgroup = groupMatch[1];
        const macMatch = trimmed.match(/MAC\s+=\s+([0-9a-fA-F-]+)/i);
        if (macMatch) mac = macMatch[1].replace(/-/g, ':').toLowerCase();
      }

      if (hostname || workgroup || mac) {
        resolve({ hostname, workgroup, mac });
      } else {
        resolve(null);
      }
    });
  });
}

async function scanNetwork(subnetBase, cidr, onProgress) {
  const totalIPs = Math.pow(2, 32 - cidr) - 2;
  const baseParts = subnetBase.split('.').map(Number);
  const ips = [];

  if (cidr === 24) {
    for (let i = 1; i <= 254; i++) {
      ips.push(`${baseParts[0]}.${baseParts[1]}.${baseParts[2]}.${i}`);
    }
  } else if (cidr === 16) {
    for (let i = 0; i <= 255; i++) {
      for (let j = 1; j <= 254; j++) {
        ips.push(`${baseParts[0]}.${baseParts[1]}.${i}.${j}`);
      }
    }
  } else {
    for (let i = 1; i <= Math.min(totalIPs, 254); i++) {
      ips.push(`${baseParts[0]}.${baseParts[1]}.${baseParts[2]}.${i}`);
    }
  }

  const batchSize = 20;
  const results = [];
  let scanned = 0;

  for (let i = 0; i < ips.length; i += batchSize) {
    const batch = ips.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map((ip) => pingIP(ip)));

    for (const result of batchResults) {
      scanned++;
      if (result.alive) {
        result.osGuess = guessOSFromTTL(result.ttl);
        results.push(result);
        if (onProgress) onProgress({ scanned, total: ips.length, found: results.length, current: result });
      } else {
        if (onProgress) onProgress({ scanned, total: ips.length, found: results.length, current: null });
      }
    }
  }

  // ARP table for MAC addresses
  const arpEntries = await getArpTable();
  const arpMap = new Map(arpEntries.map((e) => [e.ip, e]));

  // Local machine MACs (ARP doesn't have entry for self)
  const localMacs = getLocalMacs();

  for (const result of results) {
    const arpEntry = arpMap.get(result.ip);
    if (arpEntry) {
      result.mac = arpEntry.mac;
      result.arpType = arpEntry.type;
      result.vendor = getMacVendor(result.mac);
    } else if (localMacs[result.ip]) {
      result.mac = localMacs[result.ip];
      result.arpType = 'local';
      result.vendor = getMacVendor(result.mac);
    }
  }

  // Resolve hostnames, NetBIOS, and scan ports in parallel
  const enrichedResults = await Promise.all(
    results.map(async (r) => {
      r.hostname = await resolveHostname(r.ip);

      const netbios = await getNetBIOSInfo(r.ip);
      if (netbios) {
        if (netbios.hostname && !r.hostname) r.hostname = netbios.hostname;
        r.workgroup = netbios.workgroup;
        if (!r.mac && netbios.mac) {
          r.mac = netbios.mac;
          r.vendor = getMacVendor(r.mac);
        }
      }

      r.openPorts = await scanPorts(r.ip);

      const hasPort = (portNum) => r.openPorts && r.openPorts.some((p) => p.port === portNum);
      const portNums = r.openPorts ? r.openPorts.map((p) => p.port) : [];

      // Detect device type
      if (r.openPorts && r.openPorts.some((p) => PRINTER_PORTS.includes(p.port))) {
        r.deviceType = 'Printer';
      } else if (r.osGuess === 'Windows' || hasPort(3389)) {
        r.deviceType = 'Windows';
      } else if (hasPort(53) && (hasPort(80) || hasPort(443))) {
        // Has DNS + Web admin = likely router/switch/network device
        r.deviceType = 'Network Device';
      } else if (r.hostname && /linksys|router|switch|access.?point|ap-/i.test(r.hostname)) {
        r.deviceType = 'Network Device';
      } else if (r.vendor && /cisco|netgear|tp-?link|d-?link|linksys|huawei|mikrotik|ubiquiti|fortinet/i.test(r.vendor)) {
        r.deviceType = 'Network Device';
      } else if (portNums.length === 0) {
        r.deviceType = 'Linux';
      } else {
        r.deviceType = 'Linux';
      }

      return r;
    })
  );

  return enrichedResults;
}

module.exports = {
  getLocalNetworkInfo,
  netmaskToCIDR,
  getSubnetBase,
  scanNetwork,
  getArpTable,
  pingIP,
  scanPorts,
  getMacVendor,
};
