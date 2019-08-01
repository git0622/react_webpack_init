import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Welcome from './welcome/welcome';

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
