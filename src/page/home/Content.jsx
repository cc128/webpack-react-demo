import React from "react";
import { Button, Input } from "antd";
const { TextArea } = Input;
export default class Content extends React.Component {
  state = {
    text: "", //发送内容
    cont: [], //聊天内容
    socket: $socket,
    userNumber: ""
  };
  sentInfo = e => {
      console.log(document.getElementsByClassName("sentInfo").scrollHeight)
    this.state.socket.emit("sendInfo", this.state.text);
    this.setState({ text: "" });
  };
  componentDidMount() {
    // 监听聊天消息
    this.state.socket.on("chatInfo", msg => {
      let arr = [];
      if (msg.is == "ok") {
        arr = [];
      } else {
        arr = this.state.cont;
        arr.push(msg.data);
        if (arr.length === 100) {
          arr.shift();
        }
        this.setState({
          cont: arr
        });
      }
    });
    // 监听在线人数
    this.state.socket.on("updatePerson", num => {
      this.setState({ userNumber: num.userNumber });
    });
  }
  render() {
    return (
      <div className="content">
        <div className="sentInfo">
          <div>
            <div className="center">
              在线人数{this.state.userNumber}
              <br />
            </div>
            {this.state.cont.map((e, i) => {
              return <div key={i}>{e}</div>;
            })}
          </div>
        </div>
        <br />
        <TextArea
          placeholder="Please enter the content"
          value={this.state.text}
          autosize={{ minRows: 2, maxRows: 6 }}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
        <div style={{ margin: "24px 0" }} />
        <Button type="primary" onClick={this.sentInfo}>
          发送
        </Button>
      </div>
    );
  }
}
