const express = require('express');
const cors = require('cors');
const path = require('path');
const {
  getLocalNetworkInfo,
  netmaskToCIDR,
  getSubnetBase,
  scanNetwork,
} = require('./scanner');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Serve frontend static files - support both dev and pkg exe modes
const clientDist = process.pkg
  ? path.join(path.dirname(process.execPath), 'client', 'dist')
  : path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDist));

app.get('/api/network-info', (req, res) => {
  const interfaces = getLocalNetworkInfo();
  const info = interfaces.map((iface) => ({
    ...iface,
    cidr: netmaskToCIDR(iface.netmask),
    subnetBase: getSubnetBase(iface.address, iface.netmask),
  }));
  res.json(info);
});

app.get('/api/scan', async (req, res) => {
  try {
    const { subnet, cidr } = req.query;
    const cidrNum = parseInt(cidr) || 24;

    let subnetBase;
    if (subnet) {
      subnetBase = subnet;
    } else {
      const interfaces = getLocalNetworkInfo();
      if (interfaces.length === 0) {
        return res.status(500).json({ error: 'No network interface found' });
      }
      const iface = interfaces[0];
      subnetBase = getSubnetBase(iface.address, iface.netmask);
    }

    const results = await scanNetwork(subnetBase, cidrNum);
    res.json({ subnet: subnetBase, cidr: cidrNum, results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/scan/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const { subnet, cidr } = req.query;
  const cidrNum = parseInt(cidr) || 24;

  let subnetBase;
  if (subnet) {
    subnetBase = subnet;
  } else {
    const interfaces = getLocalNetworkInfo();
    if (interfaces.length === 0) {
      res.write(`data: ${JSON.stringify({ error: 'No network interface found' })}\n\n`);
      res.end();
      return;
    }
    const iface = interfaces[0];
    subnetBase = getSubnetBase(iface.address, iface.netmask);
  }

  const onProgress = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  scanNetwork(subnetBase, cidrNum, onProgress)
    .then((results) => {
      res.write(`data: ${JSON.stringify({ done: true, results })}\n\n`);
      res.end();
    })
    .catch((err) => {
      res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
      res.end();
    });
});

// SPA catch-all - serve index.html for non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`KAHIS IPScan server running on http://localhost:${PORT}`);

  // Auto-open browser
  const openCmd = process.platform === 'win32' ? 'start ""' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  require('child_process').exec(`${openCmd} http://localhost:${PORT}`);
});
