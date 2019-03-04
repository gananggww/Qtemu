import React, { Component } from 'react';
import { connect } from "react-redux";
import { Info } from './info'
import '../../App.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['Jakarta, Indonesia', 2000, 'Ganang'],
      check: 'test'
    }
  }

  checkRoute() {
    if (this.props.hehe.location.pathname == this.props.hehe.match.url) {
      return (
        <div>
          <div className="photo">
            {this.props.header_state}
          </div>
          <div className="content-header">
            <div className="title-header">Kelas Hacktiv8 punya routing {this.props.name.name}</div>
            <div className="sub-content-header">
              <div className="sub-header">
                <div>Location</div>
                <div>Kuota</div>
                <div>Instruktur</div>
              </div>
              <Info hehe={this.state.check} info={this.state.list}/>
            </div>
            <div className="button-header">Join Us</div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h3>
            No match for <code>{this.props.hehe.location.pathname}</code>
          </h3>
        </div>
      )
    }
  }
  render() {
    console.log(this.props.hehe);
    return (
      <div className="header">
        {this.checkRoute()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    header_state: state ? state.header : 'loading'
  }
}

const Connection = connect(mapStateToProps, null)(Header);
export default Connection
