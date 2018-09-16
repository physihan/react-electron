
/**
 * 获取局域网ip地址
 */
export function getIPAddress(type) {
  let ip;
  const interfaces = window.require('os').networkInterfaces();
  console.log(interfaces)
  Object.keys(interfaces).find(key => interfaces[key].some((item) => {
    if (item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal) {
      ip = item.address;
      return true;
    }
    return false;
  }));
  return ip;
}

export default {};
