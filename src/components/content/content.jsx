import React, { Component } from 'react';
import '../../App.css';
import { Prev, Next, Swapi } from './list';
import axios from 'axios';

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
      },
      get_list: [],
      element_status: true,
      detail: null
    }
    
  }
  
  fetching_2() {
    let options = {
      method: 'GET',
      url: 'https://swapi.co/api/people/'
    }
    axios(options)
    .then(({data}) => {
      console.log('ini fatching 2', data.results);
      this.setState({
        get_list: data.results
      })
    }).catch(err => {
      console.log(err)
    })
  }
  fetching() {
    axios.get('https://swapi.co/api/people/')
    .then(({ data }) => {
      console.log('ini fatching 1', data.results);
      this.setState({
        get_list: data.results
      })
    })
    .catch(error => console.log(error))
  }

  async fetching_3(url=null) {
    let options = {
      method: 'GET',
      url: url ? url : 'https://swapi.co/api/people/'
    }
    try {
      let { data } = await axios(options)
      if (data) {
        console.log('ini fatching 3', data.results);
        if (!url) {
          this.setState({
            get_list: data.results,
            // element_status: true
          })
        } else {
          this.setState({
            detail: data,
            element_status: false
          })
          // alert(JSON.stringify(data.name))
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  componentWillMount() {
    // this.fetching()
    // this.fetching_2()
    this.fetching_3()
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

  if_null(payload) {
    if (!payload || payload == 'n/a')
        return 'tidak ada value'
    else 
        return payload    
  }

  async fetching_detail(url) {
    // alert(url)
    let options = {
      method: 'GET',
      url: url
    }
    try {
      let { data } = await axios(options)
      if (data) {
        alert(JSON.stringify(data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  detail_con() {
    if(this.state.element_status) {
      return (
        <div className="items">
            {
                this.state.get_list.map((e, idx) => {
                    return (
                        <div onClick={() => this.fetching_3(e.url)} className="item">
                            <div className="fill">{idx + 1} {e.name}</div>
                            <div className="fill">{this.if_null(e.height)}</div>
                            <div className="fill">{this.if_null(e.hair_color)}</div>
                            <div className="fill">{this.if_null(e.url)}</div>                            
                        </div>
                    )
                })
            }
          </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.setState({element_status: true})}>balik bray</button>
          {this.state.detail.name}
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        {/* <div className="content">
          <div className="title-content">
            Next Meet Up
          </div>
          <Next obj={this.state.obj} />
        </div> */}
        <div className="list">
          <div className="title-list">Past Meet Up</div>
          <button onClick={() => this.pushya()}>hehe</button>
          {/* <Prev list={this.state.list}/> */}
          {/* <Swapi list={this.state.get_list}></Swapi> */}
          {this.detail_con()}
        </div>
      </div>
    );
  }
}

export default Content;
