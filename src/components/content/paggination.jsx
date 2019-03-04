import React, {Component} from 'react'
import { connect } from "react-redux";
class Paggination extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    next() {
      
    }

    prev() {
    
    }
    render() {
        return (
            <div>
                <button onClick={() => this.prev()}>Prev</button> 
                  {this.props.currentPage_state} 
                <button onClick={() => this.next()}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage_state: state ? state.currentPage : 1
    }
  }
  
const mapDispatchToProps = (dispatch) => ({})

const Connection = connect(mapStateToProps, mapDispatchToProps)(Paggination);
export default Connection
