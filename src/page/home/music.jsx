import React from "react";
import { Button, InputItem, WingBlank, TextareaItem } from "antd-mobile";
import io from 'socket.io-client';
 
const socket = io('http://192.168.10.12:1337');
export default class Home extends React.Component {
    state = { text: "" };
    render() {
    let menuStype = {
      padding: "0 10px"
    };
    return (
      <div className="center">
        <br />
        <TextareaItem
          title=""
          placeholder="auto focus in Alipay client"
          data-seed="logId"
          ref={el => (this.autoFocusInst = el)}
          autoHeight
          rows={3}
          count={100}
          onChange={this.text1}
        />
        <br />
        <WingBlank>
          <Button type="primary" onClick={this.send}>
            发送
          </Button>
        </WingBlank>
      </div>
    );
  }
  text1 = e => {
    console.log(e);
    this.setState({
      text: e
    });
  };
  send = e => {
    // socket.emit('chat message', 'aaaaaaaaaaaa');
    console.log(this.state.text);
  };
}
