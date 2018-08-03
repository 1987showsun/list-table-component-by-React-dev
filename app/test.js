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

    returnCurrentPage( currentPage ){
        //current page number
    }

    returnSortFreeFunctionName(sortStatus){
        //return sort status
    }

    render(){
        return(
            <div>
                <List 
                    match             = { this.props.match }
                    total             = { total }
                    limit             = { limit }
                    columns           = { thead['test'] }
                    data              = { data }
                    currentPage       = { this.props.match['params']['current'] }
                    paginationStyle   = "model1"
                    paginationPath    = { `/asd` }
                    paginationSearch  = { `?testSearch=zzzz` }
                    returnCurrentPage = { this.returnCurrentPage.bind(this) }
                    returnSort        = { this.returnSortFreeFunctionName.bind(this) }
                    fixedWidth        = { this.state.fixedWidth }
                    fixed             = { ["thead","tfooter"] }
                />
            </div>
        )
    }
}