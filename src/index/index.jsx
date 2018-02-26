import React from 'react';
import Aaaa from '../images/a.jpg';
export default class Root extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>my index</h1>
        <p><a href="admin.html">admin</a></p>
        <img src={Aaaa} alt=""/>
      </div>)
  }
}