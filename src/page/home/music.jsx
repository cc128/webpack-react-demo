import React from "react";
import { Button, InputItem, WingBlank, TextareaItem } from "antd-mobile";
const io = require("socket.io-client");
// const socket = io("http://192.168.10.12:1337");
// const socket = io.connect("http://192.168.10.12:1337");
let loginfoData = JSON.parse(localStorage.getItem("loginfoData"));
export default class Home extends React.Component {
  state = {
    text: "", //发送内容
    cont: [], //聊天内容
    userNumber: 0, //在线人数
    socket: io.connect("http://192.168.10.12:1337")
  };
  componentWillUnmount() {
    // this.state.socket.emit("updatePerson", loginfoData.userId);
  }
  componentDidMount() {
    // 表示在线人数加一
    // this.state.socket.emit("setUserNumber", loginfoData.userId);
    // 监听聊天消息
    this.state.socket.on("chatInfo", msg => {
      let arr = [];
      if (msg.is == "ok") {
        arr = [];
      } else {
        arr = this.state.cont;
        arr.push(msg.data);
        console.log(arr);
        if (arr.length === 10) {
          arr.shift();
        }
        this.setState({
          cont: arr
        });
      }
    });
    // 监听在线人数
    this.state.socket.on("updatePerson", num => {
      this.setState({
        userNumber: num.userNumber
      });
    });
  }
  render() {
    let menuStype = {
      padding: "0 10px"
    };
    return (
      <div>
        <div>
          <div className="center">
            <br />
            在线人数{this.state.userNumber}
            <br />
          </div>
          {this.state.cont.map((e, i) => {
            return <div key={i}>{e}</div>;
          })}
        </div>
        <br />
        <TextareaItem
          value={this.state.text}
          title=""
          placeholder="请输入内容"
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
    this.setState({
      text: e
    });
  };
  // 发送消息
  send = e => {
    this.state.socket.emit("sendInfo", this.state.text);
    this.text1("");
  };
}
