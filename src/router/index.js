import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import Home from '../page/home/home';
import Home from '@page';
import Writing from '@page/Writing/Writing';

// import Tabs from '../page/home/Tabs';

import Login from '../page/login';
export const Index = () => (
    <Router>
        <div style={{ height: '100%' }}>
            {/* <Switch> */}
            {/* <Route exact path="/" component={Login} /> */}
            <Route path="/Home" component={Home} />
            {/* <Route path="/Home" component={Tabs} /> */}
            {/* <Route path="/" component={Home} /> */}
            <Route path="/Writing" component={Writing} />
            {/* </Switch> */}
            {/* <Route path="/Home" component={Bottomtabs} /> */}
            {/* <Route path="/a/b" component={Bottomtabs} /> */}
        </div>
    </Router>
)
