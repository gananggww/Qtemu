import React, { Component } from 'react';
import Info from './info'
import '../../App.css';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      list: ['Jakarta, Indonesia', 2000, 'Ganang'],
      check: 'test'
    }
  }
  render() {
    return (
      <div className="header">
        <div className="photo">
          Photo
        </div>
        <div className="content-header">
          <div className="title-header">Kelas Hacktiv8</div>
          <div className="sub-content-header">
            <div className="sub-header">
              <div>Location</div>
              <div>Kuota</div>
              <div>Instruktur</div>
            </div>
            <Info info={this.state.list}/>
          </div>
          <div className="button-header">Join Us</div>
        </div>
      </div>
    );
  }
}

export default Header;
