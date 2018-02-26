import React from 'react';
import { IsPC } from '../tool/tool.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, Input } from 'antd';
import { user_login } from '../req'
import Home from '../page/home/home';
import Login from '../page/login';
export const Index = () => (
    <Router>
        <div>
            <Route path="/" component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
        </div>
    </Router>
)
