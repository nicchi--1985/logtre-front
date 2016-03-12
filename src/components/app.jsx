import React, {Component} from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>this is Logre</h2>
        <Link to="/new">go register log</Link>
        {this.props.children}
      </div>
    )
  }
}
