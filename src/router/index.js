import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../page/home/home';
import music from '../page/home/music';
// import Tabs from '../page/home/Tabs';
import Bottomtabs from '../page/Bottomtabs';

import Login from '../page/login';
export const Index = () => (
    <Router>
        <div>
            {/* <Switch> */}
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/music" component={music} />
            <Route path="/a/b" component={music} />
            {/* </Switch> */}
            <Route path="/" component={Bottomtabs} />
        </div>
    </Router>
)