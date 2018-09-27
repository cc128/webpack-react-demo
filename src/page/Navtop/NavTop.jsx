import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class NavTop extends React.Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <ul className="nav-ul">
          <li className="fl"><Link to="/Writing"> 写文章</Link> </li>
          <li className="fl">2</li>
        </ul>
        <div className="clear"></div>
      </div>
    );
  }
}
