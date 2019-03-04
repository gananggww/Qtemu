import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { headerAction } from '../../redux/actions.js'
import '../../App.css';

class Navbar extends Component {
  constructor(props){
      super(props)
      this.state = {
        icon: 'Qtemu',
        list: [{
            name: 'fadli hoho'
        }, {
            name: 'bobby hehe'            
        }, {
            name: 'rama hihi'
        }, {
            name: 'robin xaxa'            
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
      // alert(idx + ' ' +val)
      this.props.header(val)
  }

  slug(val) {
    let rs = val.split(' ')
    return rs.join('-')
  }

  events() {
    if (this.state.icon === 'Qtemu') {
        return (
            this.state.list.map((e, idx) => {
                return (
                    <Link to={idx === 0 ? "/":`/${this.slug(e.name)}`} onClick={() => this.alert_myself(idx, e.name)} style={{marginRight: '10px'}}> {idx + 1} {e.name} </Link>
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



const mapDispatchToProps = (dispatch) => ({  
  header: (payload) => dispatch(headerAction(payload)),  
})

const Connection = connect(null, mapDispatchToProps)(Navbar);
export default Connection
