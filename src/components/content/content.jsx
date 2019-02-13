import React, { Component } from 'react';
import '../../App.css';
import { Prev, Next } from './list';

class Content extends Component {
  constructor() {
    super() 
    this.state = {
      list: [{
        date: '27 November 2017',
        place: 'Jakarta',
        many: 360
      }, {
        date: '27 November 2017',
        place: '',
        many: null
      }, {
        date: '27 November 2017',
        place: 'hehe Jakarta',
        many: 360
      }],
      obj: {
        title: 'artikel selanjutnya',
        date: '27 November 2017',
        content: 'Lorem Ipsum doler amet Lorem Ipsum doler amet Lorem Ipsum doler amet'
      }
    }
  }
  pushya() {
    let arr = this.state.list
    arr.push({
      date: '27 November 2017',
      place: 'hehe Jakarta',
      many: 360
    })
    this.setState({
      list: arr
    })
  }
  render() {
    return (
      <div>
        <div className="content">
          <div className="title-content">
            Next Meet Up
          </div>
          <Next obj={this.state.obj} />
        </div>
        <div className="list">
          <div className="title-list">Past Meet Up</div>
          <button onClick={() => this.pushya()}>hehe</button>
          <Prev list={this.state.list}/>
        </div>
      </div>
    );
  }
}

export default Content;
