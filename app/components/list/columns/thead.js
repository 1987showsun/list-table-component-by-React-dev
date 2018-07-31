import React from 'react';

export default class Thead extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title                      : props.title,
            sortSwitch                 : props.sortSwitch || false,
            sort                       : props.sort,
            tHeadKey                   : props.tHeadKey   || "",
            [props.tHead['columnKey']] : 0,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tHead : nextProps.tHead,
            sort  : nextProps.sort,
        })
    }

    sortStatus(tHeadKey){

        let _sort        = this.state.sort;
        let sortStatus   = _sort.filter(item=>{
            return Object.keys(item)==tHeadKey;
        })[0][tHeadKey];

        switch (sortStatus) {
            case 0:
                return "fas fas fa-sort";
                break;

            case 1:
                return "fas fa-sort-down";
                break;
        
            default:
                return "fas fa-sort-up";
                break;
        }
    }

    sortACtion(tHeadKey){

        let _sort      = this.state.sort;
        let sortStatus   = _sort.filter(item=>{
            return Object.keys(item)==tHeadKey;
        })[0][tHeadKey];

        sortStatus ++;
        if( sortStatus>2 ){
            sortStatus=0;
        }
        this.setState({
            [tHeadKey] : sortStatus
        },()=>{
            this.props.returnSataus( tHeadKey,sortStatus );
        })
    }

    render(){
        return(
            <li className="t-head">
                <p>{this.state.title}</p>
                {
                    this.state.sortSwitch &&
                        <span className={`sort ${this.sortStatus(this.state.tHeadKey)}`} onClick={this.sortACtion.bind(this,this.state.tHeadKey)}></span>
                }
            </li>
        );
    }
}
