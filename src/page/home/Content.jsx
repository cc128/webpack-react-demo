import React from "react";
import { Button, Input } from "antd";
const { TextArea } = Input;
export default class Content extends React.Component {
  state = {
    text: "", //发送内容
    cont: [], //聊天内容
    socket: $socket,
    userNumber: "",
    editor: ""
  };
  sentInfo = e => {
    console.log(typeof this.state.editor.txt.html());
    // if (!this.state.text) return;
    this.state.socket.emit("sendInfo", this.state.editor.txt.html());
    this.state.editor.txt.html('')
    // this.setState({ text: "" });
  };
  aa = e => {
    alert(1)
  }
  componentDidMount() {
    //模块加载前
  }
  componentDidMount() {
    // 监听聊天消息
    this.state.socket.on("chatInfo", msg => {
      let arr = [];
      if (msg.is == "ok") {
        console.log();
        arr = msg.data;
      } else {
        arr = this.state.cont;
        arr.push(msg.data);
        if (arr.length === 100) {
          arr.shift();
        }
      }
      this.setState({
        cont: arr
      });
    });
    // 监听在线人数
    this.state.socket.on("updatePerson", num => {
      this.setState({ userNumber: num.userNumber });
    });
    let E = window.wangEditor;
    let editor = new E("#editor");
    setTimeout(()=>{
      document.getElementsByClassName('w-e-text-container')[0].style.height = 'auto'
    })
    this.setState(
      {
        editor: editor
      },
      function() {
        editor.customConfig.uploadImgShowBase64 = true;
        this.state.editor.create();
      }
    );
  }
  render() {
    return (
      <div className="content">
        <div className="infoBox">
          <div>
            <div className="center">
              在线人数{this.state.userNumber}
              <br />
            </div>
            {this.state.cont.map((e, i) => {
              {
                e.includes("src=\"https") ? ( e = e.replace(/src=\"https/," onClick=(aa) "+" src=\"https")) : ( e.includes("src=\"https") ? "" : e )
              }
              return (
                <div key={i} className="infoStype">
                  <div className="photo fl" />
                  <div
                    className="text fl"
                    dangerouslySetInnerHTML={{ __html: e }}
                  />
                  <p>{ e.includes("src=\"https") ? e : "bbbbbbbbbb"}</p>
                  {/* <p>{e}</p> */}
                  <div className="clear"></div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <div id="editor" />
        <div style={{ margin: "24px 0" }} />
        <Button type="primary" onClick={this.sentInfo}>
          发送
        </Button>
      </div>
    );
  }
}
