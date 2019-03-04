import React, { Component } from 'react';
import {  BrowserRouter as Mother } from 'react-router-dom'
import { Provider } from "react-redux"
import  store  from "./redux/store"
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
      <Provider store={store}>
        <Mother>
          <div>
            <Main />
          </div>
        </Mother>
      </Provider>
    );
  }
}

export default App;