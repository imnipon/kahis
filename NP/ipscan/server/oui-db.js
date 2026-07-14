const { getVendor } = require('mac-oui-lookup');

function isLocallyAdministered(mac) {
  if (!mac) return false;
  const firstOctet = parseInt(mac.split(':')[0], 16);
  return (firstOctet & 0x02) === 0x02;
}

function getMacVendor(mac) {
  if (!mac) return null;

  if (isLocallyAdministered(mac)) {
    return 'Randomized (Local)';
  }

  const vendor = getVendor(mac);
  return vendor || null;
}

module.exports = { getMacVendor, isLocallyAdministered };
