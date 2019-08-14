import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Welcome from './src/welcome/welcome';
import "./index.scss";
import "./src/assets/styles/reset.css";


class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
