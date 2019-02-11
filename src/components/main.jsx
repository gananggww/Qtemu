import React, { Component } from 'react';
import Navbar from './navbar/navbar'
import Header from './header/header'
import Content from './content/content'

import '../App.css';

class Main extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default Main;
