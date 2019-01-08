import React, { Component } from 'react';
import Login from './Login'
import _ from 'lodash';

class Home extends Component {
  render() {
    var user_info = JSON.parse(localStorage.getItem('user'));
    if(!_.isNull(user_info)) var {userName, checkLogin} = user_info;
    if(checkLogin){
      return <div>Hello {userName}</div>
    }else{
      return <Login />
    }
  }
}

export default Home;
