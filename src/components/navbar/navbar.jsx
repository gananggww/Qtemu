import React, { Component } from 'react';
import '../../App.css';

class Navbar extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }

  componentDidMount() {
      console.log(this.props);   
  }
  render() {
    return (
      <div className="navbar">
          <div className="left-navbar">
              <div className="logo">Qtemu</div>
              <div>{this.props.name}</div>
              <div>Explore</div>
          </div>
          <div className="right-navbar">
                Login
          </div>
      </div>
    );
  }
}

export default Navbar;
