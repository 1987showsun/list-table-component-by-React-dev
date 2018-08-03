import React from 'react';

//Components
import List  from './components/list';

//Jsons
import thead                               from './public/json/thead.json';
import data                                from './public/json/data.json';

const total   = 23;
const limit   = 10;

export default class Router extends React.Component{

    constructor(props){
        super(props);
    this.state = {
        fixedWidth : 100,
    }
    }

    reloadAData(sort){
        console.log(sort);
    }

    returnSortFreeFunctionName(sortStatus){
        //return sort status
    }

    render(){
        return(
            <div>
                <List 
                    total           = { total }
                    limit           = { limit }
                    columns         = { thead['test'] }
                    data            = { data }
                    currentPage     = "1"
                    paginationStyle = "model1"
                    paginationPath  = {`/asd`}
                    paginationSearch= {`?testSearch=zzzz`}
                    reload          = { this.reloadAData.bind(this) }
                    returnSort      = { this.returnSortFreeFunctionName.bind(this) }
                    fixedWidth      = { this.state.fixedWidth }
                    fixed           = {["thead","tfooter"]}
                />
            </div>
        )
    }
}