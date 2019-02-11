import React, { Component } from 'react';
import Main from './components/main.jsx'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "RAMA"
    }
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;