import React                               from 'react';
import ReactDOM                            from 'react-dom';
import { BrowserRouter }                   from "react-router-dom";

//Components
import List                                from './components/list';

//Jsons
import thead                               from './public/json/thead.json';
import data                                from './public/json/data.json';

//CSS
import './public/stylesheets/style.scss';

const total   = 10;
const limit   = 10;

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        fixedWidth : 100,
    }
  }

  reloadAData(){

  }

  render(){
    return(
      <List 
          total           = { total }
          limit           = { limit }
          columns         = { thead['test'] }
          data            = { data }
          currentPage     = "1"
          paginationStyle = "model1"
          paginationPath  = {`/nowPageType`}
          paginationSearch= {""}
          reload          = { this.reloadAData.bind(this) }
          fixedWidth      = { this.state.fixedWidth }
          fixed           = {["thead","tfooter"]}
      />
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
