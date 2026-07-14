import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Wifi,
  ScanLine,
  Search,
  Download,
  Trash2,
  Loader2,
  Clock,
  Server,
  Network,
  Monitor,
  Activity,
  Cpu,
  Shield,
  Layers,
  Globe,
} from 'lucide-react';

const API_BASE = '';

function App() {
  const [networkInfo, setNetworkInfo] = useState([]);
  const [selectedInterface, setSelectedInterface] = useState(0);
  const [customSubnet, setCustomSubnet] = useState('');
  const [cidr, setCidr] = useState(24);
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState({ scanned: 0, total: 0, found: 0 });
  const [results, setResults] = useState([]);
  const [liveResults, setLiveResults] = useState([]);
  const [search, setSearch] = useState('');
  const eventSourceRef = useRef(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/network-info`)
      .then((res) => res.json())
      .then((data) => {
        setNetworkInfo(data);
        if (data.length > 0) {
          setCidr(data[0].cidr);
        }
      })
      .catch((err) => console.error('Failed to get network info:', err));
  }, []);

  const handleScan = useCallback(() => {
    setScanning(true);
    setResults([]);
    setLiveResults([]);
    setProgress({ scanned: 0, total: 0, found: 0 });

    const iface = networkInfo[selectedInterface];
    const subnet = customSubnet || (iface ? iface.subnetBase : '');
    const params = new URLSearchParams({ subnet, cidr });

    const eventSource = new EventSource(`${API_BASE}/api/scan/stream?${params}`);
    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.error) {
        console.error(data.error);
        eventSource.close();
        setScanning(false);
        return;
      }

      if (data.done) {
        setResults(data.results);
        setScanning(false);
        eventSource.close();
        return;
      }

      setProgress({ scanned: data.scanned, total: data.total, found: data.found });

      if (data.current && data.current.alive) {
        setLiveResults((prev) => [...prev, data.current]);
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
      setScanning(false);
    };
  }, [networkInfo, selectedInterface, customSubnet, cidr]);

  const handleStop = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    setScanning(false);
  };

  const handleClear = () => {
    setResults([]);
    setLiveResults([]);
    setProgress({ scanned: 0, total: 0, found: 0 });
  };

  const handleExport = () => {
    const data = results.length > 0 ? results : liveResults;
    const headers = ['IP Address', 'Status', 'MAC Address', 'Vendor', 'Hostname', 'Workgroup', 'Device Type', 'OS', 'Latency (ms)', 'TTL', 'ARP Type', 'Open Ports'];
    const rows = data.map((r) => [
      r.ip,
      r.alive ? 'Online' : 'Offline',
      r.mac || '-',
      r.vendor || '-',
      r.hostname || '-',
      r.workgroup || '-',
      r.deviceType || '-',
      r.osGuess || '-',
      r.latency || '-',
      r.ttl || '-',
      r.arpType || '-',
      r.openPorts ? r.openPorts.map((p) => `${p.port}/${p.name}`).join('; ') : '-',
    ]);
    // Escape CSV fields that contain commas
    const escapedRows = rows.map((row) => row.map((field) => {
      const s = String(field);
      if (s.includes(',') || s.includes('"') || s.includes('\n')) {
        return '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
    }));
    const csv = [headers, ...escapedRows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ipscan_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const displayResults = results.length > 0 ? results : liveResults;
  const filteredResults = displayResults.filter((r) => {
    const q = search.toLowerCase();
    return (
      r.ip.toLowerCase().includes(q) ||
      (r.mac && r.mac.includes(q)) ||
      (r.hostname && r.hostname.toLowerCase().includes(q)) ||
      (r.vendor && r.vendor.toLowerCase().includes(q)) ||
      (r.osGuess && r.osGuess.toLowerCase().includes(q)) ||
      (r.workgroup && r.workgroup.toLowerCase().includes(q)) ||
      (r.deviceType && r.deviceType.toLowerCase().includes(q))
    );
  });

  const progressPercent = progress.total > 0 ? (progress.scanned / progress.total) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">KAHIS IPScan</h1>
              <p className="text-xs text-slate-400">LAN Network Discovery Tool</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Scan Configuration */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" />
            Scan Configuration
          </h2>

          {/* Network Interface Selection */}
          {networkInfo.length > 0 && (
            <div className="mb-4">
              <label className="text-sm text-slate-400 mb-2 block">Network Interface</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {networkInfo.map((iface, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedInterface(idx);
                      setCustomSubnet('');
                      setCidr(iface.cidr);
                    }}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      selectedInterface === idx && !customSubnet
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Monitor className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium">{iface.interface}</span>
                    </div>
                    <div className="text-xs text-slate-400 space-y-0.5">
                      <div>IP: {iface.address}</div>
                      <div>Subnet: {iface.subnetBase}/{iface.cidr}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Custom Subnet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="text-sm text-slate-400 mb-2 block">
                Custom Subnet (optional - overrides interface selection)
              </label>
              <input
                type="text"
                value={customSubnet}
                onChange={(e) => setCustomSubnet(e.target.value)}
                placeholder="e.g. 192.168.1.0"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">CIDR / Subnet Mask</label>
              <select
                value={cidr}
                onChange={(e) => setCidr(parseInt(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500"
              >
                <option value={24}>/24 (255.255.255.0 - 254 IPs)</option>
                <option value={16}>/16 (255.255.0.0 - 65534 IPs)</option>
                <option value={8}>/8 (255.0.0.0 - Large)</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {!scanning ? (
              <button
                onClick={handleScan}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-medium text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                <ScanLine className="w-4 h-4" />
                Start Scan
              </button>
            ) : (
              <button
                onClick={handleStop}
                className="flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-500 rounded-lg font-medium text-sm transition-all"
              >
                <Loader2 className="w-4 h-4 animate-spin" />
                Stop Scanning
              </button>
            )}
            <button
              onClick={handleClear}
              disabled={displayResults.length === 0}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg font-medium text-sm transition-all border border-slate-700"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
            <button
              onClick={handleExport}
              disabled={displayResults.length === 0}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg font-medium text-sm transition-all border border-slate-700"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {scanning && (
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="font-medium">Scanning in progress...</span>
              </div>
              <span className="text-sm text-slate-400">
                {progress.scanned} / {progress.total} scanned | {progress.found} found
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-right text-xs text-slate-500 mt-1">
              {progressPercent.toFixed(1)}%
            </div>
          </div>
        )}

        {/* Results */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" />
              Scan Results
              <span className="text-sm font-normal text-slate-400">
                ({filteredResults.length} devices{search ? ' filtered' : ''})
              </span>
            </h2>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search IP, MAC, hostname, vendor, OS..."
                className="bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-cyan-500 w-64"
              />
            </div>
          </div>

          {filteredResults.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              {scanning ? (
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
                  <p>Waiting for responses...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <Wifi className="w-8 h-8 text-slate-600" />
                  <p>No scan results yet. Click "Start Scan" to begin.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-left">
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">IP Address</th>
                    <th className="px-4 py-3 font-medium">MAC Address</th>
                    <th className="px-4 py-3 font-medium">Vendor</th>
                    <th className="px-4 py-3 font-medium">Hostname</th>
                    <th className="px-4 py-3 font-medium">Device Type</th>
                    <th className="px-4 py-3 font-medium">OS</th>
                    <th className="px-4 py-3 font-medium">Latency</th>
                    <th className="px-4 py-3 font-medium">Open Ports</th>
                    <th className="px-4 py-3 font-medium">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((device, idx) => (
                    <tr
                      key={device.ip}
                      className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-green-400 text-xs font-medium">Online</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-cyan-400">{device.ip}</td>
                      <td className="px-4 py-3 font-mono text-slate-300">
                        {device.mac || (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-300 text-xs">
                        {device.vendor ? (
                          <span className={device.vendor === 'Randomized (Local)' ? 'text-amber-400' : 'text-slate-300'}>
                            {device.vendor}
                          </span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        {device.hostname || (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {device.deviceType ? (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            device.deviceType === 'Printer'
                              ? 'bg-yellow-500/10 text-yellow-400'
                              : device.deviceType === 'Network Device'
                                ? 'bg-orange-500/10 text-orange-400'
                                : device.deviceType === 'Windows'
                                  ? 'bg-blue-500/10 text-blue-400'
                                  : 'bg-green-500/10 text-green-400'
                          }`}>
                            {device.deviceType}
                          </span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {device.osGuess ? (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            device.osGuess === 'Windows'
                              ? 'bg-blue-500/10 text-blue-400'
                              : 'bg-green-500/10 text-green-400'
                          }`}>
                            {device.osGuess}
                          </span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {device.latency != null ? (
                          <span className="inline-flex items-center gap-1 text-slate-300">
                            <Clock className="w-3 h-3 text-slate-500" />
                            {device.latency}ms
                          </span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {device.openPorts && device.openPorts.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {device.openPorts.map((p, i) => (
                              <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono">
                                {p.port}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {device.arpType ? (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            device.arpType === 'dynamic'
                              ? 'bg-blue-500/10 text-blue-400'
                              : device.arpType === 'static'
                                ? 'bg-purple-500/10 text-purple-400'
                                : 'bg-green-500/10 text-green-400'
                          }`}>
                            {device.arpType}
                          </span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Info Card */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-3">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                <ScanLine className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-1">Ping Sweep + OS</p>
                <p>Pings each IP, detects OS from TTL (Windows=128, Linux=64, Router=255)</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <Network className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-1">ARP + Vendor</p>
                <p>Reads ARP cache for MAC addresses, looks up manufacturer from OUI database</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-1">DNS + NetBIOS</p>
                <p>Resolves hostnames via reverse DNS and NetBIOS (Windows workgroup)</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-1">Port Scan</p>
                <p>Scans 22 common ports (SSH, HTTP, HTTPS, RDP, SMB, MySQL, etc.)</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-slate-500">
          KAHIS IPScan - LAN Network Discovery Tool
        </div>
      </footer>
    </div>
  );
}

export default App;
