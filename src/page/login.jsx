import React from "react";
import { IsPC } from "../tool/tool.js";
import { user_login, query_page_method } from "../req";
// import { Button, Input, notification } from "antd";
import { Button, InputItem, WingBlank } from "antd-mobile";
import md5 from "md5";
export default class login extends React.Component {
  state = { userName: "17628285312", pws: "", praise: false, loading: false };
  render() {
    return (
      <div style={{ textAlign: "center" }} className="example-input">
        <br />
        <InputItem
          placeholder="请输入账号"
          type="phone"
          clear
          value={this.state.userName}
          onChange={this.userNameChange}
        >
          账号
        </InputItem>
        <InputItem
          placeholder="请输入密码"
          type="password"
          clear
          onChange={this.passwordChange}
        >
          密码
        </InputItem>
        {/* <Input size="large" type="text" placeholder="请输入账号" value={this.state.userName} onChange={this.userNameChange} /> */}
        {/* <Input size="large" type="password" placeholder="请输入密码" defaultValue={this.state.pws} onChange={this.passwordChange} /> */}
        <br />
        <WingBlank>
          <Button
            onClick={this.loginFunc}
            type="primary"
            loading={this.state.loading}
          >
            登录
          </Button>
        </WingBlank>
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.fileInput.files)
  };
  userNameChange = e => {
    console.log(e);
    this.setState({ userName: e });
  };
  passwordChange = e => {
    this.setState({ pws: md5(e.target.value).toUpperCase() });
  };
  // 登录
  loginFunc = () => {
    this.setState({
      loading: true
    });
    user_login({
      phone: this.state.userName,
      password: this.state.pws,
      device: 1,
      system: IsPC()
    })
      .then(res => {
        if (res.code == 0) {
          localStorage.setItem("loginfoData", JSON.stringify(res.data));
          // this.queryPageMethodFunc()
          notification.success({ message: "成功", description: "登录成功" });
          this.props.history.push("/Home");
        }
        this.setState({
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  };
  // 登录成功-查询菜单
  queryPageMethodFunc = () => {
    query_page_method({}).then(res => {
      if (res.code == 0) {
        localStorage.setItem("loginfoMenu", JSON.stringify(res.data));
        this.props.history.push("/Home");
      }
    });
  };
}
