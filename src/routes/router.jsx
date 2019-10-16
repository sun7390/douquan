import React,{ Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../pages/home'

export default class RouteConfig extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}