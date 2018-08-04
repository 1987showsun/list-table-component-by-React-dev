import React from 'react';
import { Link } from 'react-router-dom';

export default class PaginationItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            path           : props.path           || "",
            serach         : props.serach         || "",
            text           : props.text           || "",
            currentPage    : props.currentPage    || 1,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            path           : nextProps.path        || "",
            serach         : nextProps.serach      || "",
            text           : nextProps.text        || "",
            currentPage    : nextProps.currentPage || 1
        })
    }

    callback( selectedCP ){
        this.props.callback(selectedCP);
    }

    render(){
        return(
            <li>
                <Link className={`${ this.state.text==this.state.currentPage? "active" : "" }`} to={`${this.state.path}/${this.state.text}${this.state.serach}`} onClick={this.callback.bind(this,this.state.text)}>{this.state.text}</Link>
            </li>
        );
    }
}