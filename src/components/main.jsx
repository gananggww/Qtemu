import React, { Component } from 'react';
import Navbar from './navbar/navbar'
import Header from './header/header'
import Content from './content/content'

import '../App.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      name : 'Qtemuya'
    }
  }
  render() {
    return (
      <div className="body">
        <Navbar title={this.state.name} />
        <Header />
        <Content />
      </div>
    );
  }
}

export default Main;
