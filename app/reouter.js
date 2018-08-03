import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Test from './test';

export default class Router extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/:type/:current" component={Test} />
                <Route path="/:current" component={Test} />
                <Route path="/" component={Test} />
            </Switch>
        )
    }
}