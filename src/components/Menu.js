import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import { ActionCable } from 'react-actioncable-provider';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Book List',
    to: '/books',
    exact: false
  },
]


const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={
        ({match})=>{
          var active = match ? 'active' : '';
          return(
            <li className={active}>
              <Link to={to}>{label}</Link>
            </li>
          )
        }
      }
    />
  )
}

class Menu extends Component {
  status = {
    messages: []
  }

  onReceived(message) {
    console.log(message)
    this.setState({
      messages: [
          ...this.state.messages,
          message
      ]
    })
  }

  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index)=>{
        return <MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />
      })
    }
    return result;
  }

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-brand">Notification</div>
          <ActionCable channel={{channel: 'notification_channel'}} onReceived={this.onReceived} />
          <ul className="nav navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
