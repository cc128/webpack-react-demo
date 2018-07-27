import React from "react";
import { TabBar } from "antd-mobile";
import Tabs from "./Tabs";
import { client_category_list } from "req";
export default class TabBarExample extends React.Component {
  state = {};
  render() {
    let contents = {
      width: "1200px",
      margin: "auto"
    };
    let nav = {
      height:'60px',
      background:'#fff',
    };
    return (
      <div style={contents}>
        <div style={nav}>
          <img src={require("../../images/timg.jpg")} />
        </div>
        {/* <Tabs /> */}
      </div>
    );
  }
}
