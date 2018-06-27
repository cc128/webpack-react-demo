import React from 'react';
export default class Home extends React.Component {
    state = { loginfoMenu: JSON.parse(localStorage.getItem('loginfoMenu')) };
    render() {
        let menuStype = {
            padding: '0 10px'
        }
        return (
            <div className='center'>
                音乐
            </div>
        )
    }
}