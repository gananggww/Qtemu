import React, { Component } from 'react';
import '../../App.css';

class Navbar extends Component {
  constructor(props){
      super(props)
      this.state = {
        icon: 'Qtemu',
        list: [{
            name: 'fadli'
        }, {
            name: 'bobby'            
        }, {
            name: 'rama'
        }, {
            name: 'robin'            
        }]
      }
  }

  setter() {
      if (this.state.icon === 'Qtemu') {
          this.setState({
            icon : 'Qtemulah'   
          })
      } else {
        this.setState({
            icon : 'Qtemu'   
          })
      }
  }

  add_list() {
    let arr = this.state.list
    let new_val = {
        name: 'taufiq'
    }
    
    arr.push(new_val)

    let set = {list: arr}
    this.setState(set)
  }

  alert_myself(idx, val){
      alert(idx + ' ' +val)
  }

  events() {
    if (this.state.icon === 'Qtemu') {
        return (
            this.state.list.map((e, idx) => {
                return (
                <a onClick={() => this.alert_myself(idx, e.name)} style={{marginRight: '10px'}}> {idx + 1} {e.name} </a>
                )
            })
        )
    } else {
        return <div></div>
    }
  }

  render() {
    return (
      <div className="navbar">
          <div className="left-navbar">
              <div className="logo">{this.props.title}</div>
              <div>{this.props.name}</div>
              {this.events()}
          </div>
          <div className="right-navbar">
                Login
          </div>
      </div>
    );
  }
}

export default Navbar;
