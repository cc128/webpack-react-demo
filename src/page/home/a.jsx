import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
export default class Home extends React.Component {
    state = { loginfoMenu: JSON.parse(localStorage.getItem('loginfoMenu')) };
    render() {
        let menuStype = {
            padding: '0 10px'
        }
        return (
            <div className='center'>
                aaaaaaaaaaaaaa
            </div>
        )
    }
}