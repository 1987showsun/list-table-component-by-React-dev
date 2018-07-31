import React from 'react';
import { Switch,Route } from 'react-router-dom';

//Components
import Home from '../home';

export default class Roters extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    );
  }
}
