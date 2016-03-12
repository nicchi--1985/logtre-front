import React, {Component} from 'react';
import Http from './utils.js';

export default class Counter extends Component {
  constructor() {
    super();
    this.trades = this.getTradesFromServer();
    this.state = {
      count: 0
    };
  }

  getTradesFromServer() {
    Http.get('http://127.0.0.1:3000/api/trades').then(res => {
      let data = JSON.parse(res);
      console.log(data);
    }).catch(e => {
      console.error(e);
    });
  }

  handleClick() {
    this.setState({
      count: this.state.count + 3
    });
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handleClick.bind(this)}>increment</button>
      </div>
    );
  }
}
