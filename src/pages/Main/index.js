import React, { Component } from 'react';
// import './App.css';
import { getIPAddress } from '../../utils/bridge';
import { getImage } from '../../utils/qrcode';
import wifi from '../../utils/wifi';
// exports.default={getIPAddress}
class App extends Component {
  state = {
    qrData: '',
  };

  componentDidMount() {
    const port = 3000;
    const url = `http://${getIPAddress()}:${port}`;
    getImage(url).then((data) => {
      this.setState({ qrData: data });
    });
    wifi(obj => this.setState(obj));
  }

  render() {
    const { qrData, wifiName } = this.state;
    return (
      <div className="App">
        <h1>当前所在网络</h1>
        <p>{wifiName}</p>
        <h1>当前ip地址为</h1>
        <p>{getIPAddress()}</p>
        <img src={qrData} alt="qrcode" />
      </div>
    );
  }
}

export default App;
