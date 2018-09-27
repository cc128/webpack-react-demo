import React from "react";
import { Button, Input, Modal } from "antd";
import bg from '@img/b.jpg';
const homeImage = {
  background: `url(${ bg }) no-repeat`,
  backgroundSize: '100% 100%', //记得这里100%
}
export default class Chatroom extends React.Component {
  state = {
    text: "123", //发送内容
    cont: [], //聊天内容
    socket: $socket,
    userNumber: "",
    editor: "",
    visible: false
  };
  // 右键点击图片
  showRightMrnu = (e, data) => {
    return;
    e.preventDefault(); //阻止默认右键
    var menu = document.querySelector("#menu");
    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
    menu.style.width = "150px";
  };
  // 点击右键菜单
  clickRightMrnu = () => {
    document.querySelector("#menu").style.width = "0px";
  };
  // 发送消息
  sentInfo = () => {
    if (this.state.editor.txt.html() === "<p><br></p>") return;
    this.state.socket.emit("sendInfo", this.state.editor.txt.html());
    this.state.editor.txt.html("");
  };
  // 点击图片
  getImg = e => {
    if (e.includes('src="https') || e.includes('src="data')) {
      this.setState({
        visible: true,
        text: e.match(/<img[^>]+>/g)[0]
      });
    }
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
    //模块加载前
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
      let cont = document.getElementsByClassName("infoBox")[0]
      cont.scrollTop = cont.scrollHeight;
    });
    // 监听在线人数
    this.state.socket.on("updatePerson", num => {
      this.setState({ userNumber: num.userNumber });
    });
    let E = window.wangEditor;
    let editor = new E("#editor");
    editor.customConfig.zIndex = 1
    // 隐藏“网络图片”tab
    editor.customConfig.showLinkImg = false
    editor.customConfig.menus = [
      // "head", // 标题
      // "bold", // 粗体
      // "fontSize", // 字号
      // "fontName", // 字体
      // "italic", // 斜体
      // "underline", // 下划线
      // "strikeThrough", // 删除线
      // "foreColor", // 文字颜色
      // "backColor", // 背景颜色
      // "link", // 插入链接
      // "list", // 列表
      // "justify", // 对齐方式
      // "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      // "table", // 表格
      // "video", // 插入视频
      // "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    setTimeout(() => {
      // document.getElementsByClassName("w-e-text-container")[0].style.height =
      //   "auto";
    });
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
      <div className="Chatroom">
        <div className="infoBox" style={{...homeImage}}>
          <div>
            <div className="center">
              在线人数
              {this.state.userNumber}
              <br />
            </div>
            {this.state.cont.map((data, i) => {
              return (
                <div key={i} className="infoStype">
                  <div className="photo fl" />
                  <div
                    className="text fl"
                    style={{padding:data.includes('src="https') || data.includes('src="data') ? '0px' : ''}}
                    dangerouslySetInnerHTML={{ __html: data }}
                    onClick={() => this.getImg(data)}
                    onContextMenu={(e, data) => {
                      this.showRightMrnu(e, data);
                    }}
                  />
                  <div className="clear" />
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
        <br />
        <br />
        <div id="menu" onClick={this.clickRightMrnu}>
          <div className="menu">撤回消息</div>
        </div>
        <Modal
          title=""
          bodyStyle={{ textAlign: "center", padding: 0 }}
          footer={null}
          centered={true}
          width="700px"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
          <p dangerouslySetInnerHTML={{ __html: this.state.text }} />
        </Modal>
      </div>
    );
  }
}
