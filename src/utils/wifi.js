// var wifi = require('node-wifi');
// import wifi from 'node-wifi';
// 使用window.require使用原生的对象
const wifi = window.require('node-wifi');
export default function (cb) {
  // wifi.init
  wifi.init({
    iface: null, // network interface, choose a random wifi interface if set to null
  });
  wifi.getCurrentConnections((err, currentConnections) => {
    if (err) {
      console.log(err);
    }
    const [first] = currentConnections;
    cb({ wifiName: (first && first.ssid) || '请检查链接' });
    console.log(currentConnections);
    /*
        // you may have several connections
        [
            {
                iface: '...', // network interface used for the connection, not available on macOS
                ssid: '...',
                bssid: '...',
                mac: '...', // equals to bssid (for retrocompatibility)
                channel: <number>,
                frequency: <number>, // in MHz
                signal_level: <number>, // in dB
                security: '...' //
                security_flags: '...' // encryption protocols (format currently depending of the OS)
                mode: '...' // network mode like Infra (format currently depending of the OS)
            }
        ]
        */
  });
}
