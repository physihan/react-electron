import React, { Component } from 'react';
import './index.css';
// console.log(styles)
let i = 0;
export default class Talk extends Component {
  state = {
    inputValue: '',
    words: [],
  };

  onValueChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  send = () => {
    this.setState(({ words, inputValue }) => ({
      words: [...words, [inputValue, i]],
      inputValue: '',
    }));
    i += 1;
  };

  render() {
    const { inputValue, words } = this.state;
    return (
      <div>
        <div className="talk-content">
          {words.map(([word, index]) => (
            <p key={index}>{word}</p>
          ))}
        </div>
        <footer className="talk-footer">
          <input type="text" value={inputValue} onChange={this.onValueChange} />
          <button type="button" onClick={this.send}>
            发送
          </button>
        </footer>
      </div>
    );
  }
}
