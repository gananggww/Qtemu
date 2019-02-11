import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
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
            <div className="sub-header">
              <div>Jakarta, indonesia</div>
              <div>2000</div>
              <div>Ganang</div>
            </div>
          </div>
          <div className="button-header">Join Us</div>
        </div>
      </div>
    );
  }
}

export default Header;
