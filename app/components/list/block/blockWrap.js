import React from 'react';

import Item from './blockItem';

export default class Wrap extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            class   : props.class   || "",
            columns : props.columns || [],
            data    : props.data    || [],
            sort    : props.sort
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            columns : nextProps.columns || [],
            data    : nextProps.data    || [],
        })
    }

    render(){
        return(
            <ul className="list-block-ul" data-type={this.props.class}>
                <Item 
                    tBody={this.state.data} 
                    tHead={this.state.columns}
                />
            </ul>
        );
    }
}