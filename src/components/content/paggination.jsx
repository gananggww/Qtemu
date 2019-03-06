import React, {Component} from 'react'
import { connect } from "react-redux";
import { fetchThunk, change_page } from '../../redux/actions.js'
class Paggination extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    next() {
        let currentPage = this.props.currentPage_state + 1
        let count = this.props.count_ya
        let partial_count = count.toString()[0]
        let num = parseInt(partial_count) + 1
        if (this.props.currentPage_state >= num) {
            currentPage = this.props.currentPage_state
        }
        this.props.change_page(currentPage)
        this.props.fetch_ya(currentPage)
    }

    prev() {
        let currentPage = this.props.currentPage_state - 1
        if (this.props.currentPage_state <= 1) {
            currentPage = this.props.currentPage_state
        }
        this.props.change_page(currentPage)
        this.props.fetch_ya(currentPage)
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
        currentPage_state: state ? state.currentPage : 1,
        count_ya: state? state.count : 0 
    }
  }
  
const mapDispatchToProps = (dispatch) => ({
    change_page: (currentPage) => dispatch(change_page(currentPage)),
    fetch_ya: (payload) => dispatch(fetchThunk(payload))
})

const Connection = connect(mapStateToProps, mapDispatchToProps)(Paggination);
export default Connection
