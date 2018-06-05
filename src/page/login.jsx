import React from 'react';
import { IsPC } from '../tool/tool.js'
import { user_login, query_page_method } from '../req'
import { Button, Input } from 'antd';
import md5 from 'md5';
export default class login extends React.Component {
  state = { userName: '17628285312', pws: '', praise: false };
  render() {
    return (
      <div style={{ textAlign: 'center' }} className="example-input">
        {/* <input type="file" ref={input => { this.fileInput = input; }} /> */}
        <br />
        <Input size="large" type='text' placeholder='请输入账号' defaultValue={this.state.userName} onChange={this.userNameChange} />
        <br />
        <Input size="large" type='password' placeholder="请输入密码" defaultValue={this.state.pws} onChange={this.passwordChange} />
        <br />
        <Button onClick={this.loginFunc} type="primary">登录</Button>
        {/* <Button onClick={this.praiseFunc}>
          <span className="_praise">{this.state.praise ? '取消' : '点赞'}</span>
          <span>👍</span>
        </Button> */}
      </div>
    )
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.fileInput.files)
  }
  userNameChange = (e) => {

    this.setState({ userName: e.target.value })
  }
  passwordChange = (e) => {
    this.setState({ pws: md5(e.target.value).toUpperCase() })
  }
  // praiseFunc = () => {
  //   this.setState({ praise: !this.state.praise })
  // }
  // 登录
  loginFunc = () => {
    user_login({ phone: this.state.userName, password: this.state.pws, device: 1, system: IsPC() })
      .then(res => {
        if (res.code == 0) {
          sessionStorage.setItem('loginfoData', JSON.stringify(res.data))
          this.queryPageMethodFunc()
        } else {
        }
      })
  }
  // 登录成功-查询菜单
  queryPageMethodFunc = () => {
    query_page_method({})
      .then(res => {
        if (res.code == 0) {
          sessionStorage.setItem('loginfoMenu', JSON.stringify(res.data));
          this.props.history.push("/Home");
        }
      })
  }
}
