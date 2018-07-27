import React from "react";
export default class TabBarExample extends React.Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <ul className="nav-ul">
          <li className="fl">
            <img className="logo" src={require("../../images/timg.jpg")} />
          </li>
          <li className="fl">1</li>
          <li className="fl">2</li>
        </ul>
        <div className="clear"></div>
      </div>
    );
  }
}
