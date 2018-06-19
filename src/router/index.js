import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../page/home/home';
import a from '../page/home/a';
import b from '../page/home/b';
import Login from '../page/login';
export const Index = () => (
    <Router>
        <div>
            {/* <Route component={Login} /> */}
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/a" component={a} />
            <Route path="/b" component={b} />
        </div>
    </Router>
)
