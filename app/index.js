import React                               from 'react';
import ReactDOM                            from 'react-dom';

import { BrowserRouter, HashRouter } from "react-router-dom";

//Components
import Roters                              from './components/common/router.js';


//CSS
import './public/stylesheets/style.scss';

export default class Index extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <HashRouter>
          <Roters />
        </HashRouter>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
