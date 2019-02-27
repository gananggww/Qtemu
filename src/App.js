import React, { Component } from 'react';
import {  BrowserRouter as Mother } from 'react-router-dom'
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
      <Mother>
        <div>
          <Main />
        </div>
      </Mother>
    );
  }
}

export default App;