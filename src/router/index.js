import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../page/home/home';
import a from '../page/home/a';
import b from '../page/home/b';
import Login from '../page/login';
export const Index = () => (
    <Router>
        <div>
            {/* <Route exact path="/" component={Login} /> */}
            {/* <Route exact path="/Login" component={Login} /> */}
            <Route path="/Home" component={Home}/>
            <Route path="/a" component={a} />
            <Route path="/b" component={b} />
        </div>
    </Router>
)
console.log(11111111111)
// const unlisten = this.props.history.listen((location, action) => {
//     // 执行内容, 第一个参数是当前的location, 第二个是此次执行的动作
//     console.log(action, location.pathname, location.state)
// })

// // 触发listen, 使用的是push动作
// history.push('/home', { some: 'state' })

// // 执行函数, 取消监听
// unlisten()