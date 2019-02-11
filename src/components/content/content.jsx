import React, { Component } from 'react';
import '../../App.css';

class Content extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="title-content">
            Next Meet Up
          </div>
          <div className="paragraph-content">
            <div className="title-paragraph-content">Title</div>
            <div className="date-paragraph-content">20 September 2019</div>
            <div className="fill-paragraph-content">
              Lorem Ipsum doler amet Lorem Ipsum doler amet Lorem Ipsum doler amet <br/>
              Lorem Ipsum doler ametLorem Ipsum doler amet <br/>
              Lorem Ipsum doler ametLorem Ipsum doler amet
            </div>
          </div>
        </div>
        <div className="list">
          <div className="title-list">Past Meet Up</div>
          <div className="items">
            <div className="item">
              <div className="fill">27 November 2017</div>
              <div className="fill">39 Jakarta JS</div>
              <div className="fill">360 went</div>
              <div className="fill button">view</div>
            </div>
            <div className="item">
              <div className="fill">27 November 2017</div>
              <div className="fill">39 Jakarta JS</div>
              <div className="fill">360 went</div>
              <div className="fill button">view</div>
            </div>
            <div className="item">
              <div className="fill">27 November 2017</div>
              <div className="fill">39 Jakarta JS</div>
              <div className="fill">360 went</div>
              <div className="fill button">view</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
