import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { Router, Route, Link } from 'react-router'
import Home from '../page/home/home';
import music from '../page/home/music';
// import Tabs from '../page/home/Tabs';
import Login from '../page/login';
export const Index = () => (
    <Router>
        <div>
            {/* <Switch> */}
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home} />
                <Route path="/Home/music" component={music} />
                    <Route path="/a/b" component={music} />
            {/* </Switch> */}
        </div>
        {/* <Switch> */}
        {/* <Route exact path="/Login" component={Login} /> */}
        {/* <Route path="/Tabs" component={Tabs} /> */}
        {/* </Switch> */}
    </Router>
)