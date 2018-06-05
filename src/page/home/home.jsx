import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
export default class Home extends React.Component {
  state = { loginfoMenu: JSON.parse(sessionStorage.getItem('loginfoMenu')) };
  render() {
    let menuStype = {
      padding: '0 10px'
    }
    return (
      <div className='center'>
        {
          this.state.loginfoMenu.map((Menu, i) => {
            return (
              <NavLink to={Menu.pageUrl} activeStyle={{ color: 'green', fontWeight: 'bold' }} className='cursor inlineBlock' style={menuStype} key={i}>{Menu.methodName}</NavLink>
            )
          })
        }
      </div>)
  }
}