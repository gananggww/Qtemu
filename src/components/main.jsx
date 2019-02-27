import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './navbar/navbar'
import Header from './header/header'
import Content from './content/content'


import '../App.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      name : 'Qtemuya'
    }
  }
  render() {
    return (
        <div className="body">
          <Navbar title={this.state.name} />
          {/* <Header /> */}
          <Switch>
            <Route name="hehhe" exact path="/" component={Content}/>
            <Route path="/:name" render={(renderProps) => {
                return (
                  <div>
                    <Header hehe={renderProps} name={renderProps.match.params} icon={this.state.name}></Header>
                  </div>
                )
              }
            }/>
            
          </Switch>

          {/* <Content /> */}
        </div>
    );
  }
}

export default Main;
