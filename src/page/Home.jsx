import React from "react";
import NavTop from "./home/NavTop";
import Content from "./home/Content";
export default class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {/* <NavTop /> */}
        <br/>
        <Content />
      </div>
    );
  }
}
