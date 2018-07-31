import React from "react";

import ListItem from "./listItem";

export default class listWrap extends React.Component{

    constructor(props){

        const totalSwitch = props.columns.some((item,i)=>{
            return item['total']!=null;
        });

        const totalObj = props.columns.map((item,i)=>{
            if( item['total']!=null ){
                return {switch: true, text: item['total']};
            }else{
                return {switch: false, text: ""};
            }
        });

        super(props);
        this.state = {
            columns     : props.columns    || [],
            data        : props.data       || [],
            fixed       : props.fixed      || [],
            fixedWidth  : props.fixedWidth || "",
            sort        : props.sort,
            totalSwitch : totalSwitch,
            totalObj    : totalObj,
            tHeadTop    : 0,
        }
    }

    componentDidMount() {
        const _this = this;
        $('.list-ul').scroll(function(){
            let _top = $(this).scrollTop();
            _this.setState({
                tHeadTop : _top
            })
        })
    }

    componentWillReceiveProps(nextProps) {

        const totalSwitch = nextProps.columns.some((item,i)=>{
            return item['total']!=null;
        });

        const totalObj = nextProps.columns.map((item,i)=>{
            if( item['total']!=null ){
                return {switch: true, text: item['total']};
            }else{
                return {switch: false, text: ""};
            }
        });

        this.setState({
            columns     : nextProps.columns    || [],
            data        : nextProps.data       || [],
            fixed       : nextProps.fixed      || [],
            fixedWidth  : nextProps.fixedWidth || "",
            sort        : nextProps.sort       || [],
            totalSwitch : totalSwitch,
            totalObj    : totalObj,
        })
    }

    render(){
        return(
            <ul className="list-ul">
                {
                    this.state.columns.map((item,i)=>{
                        return (
                            <ListItem 
                                key          = {i} 
                                tHead        = {item} 
                                tBody        = {this.state.data} 
                                sort         = {this.state.sort} 
                                returnSataus = {this.props.returnSataus}
                                totalSwitch  = {this.state.totalSwitch}
                                totalObj     = {this.state.totalObj[i]}
                                fixedWidth   = {this.state.fixedWidth}
                                maxlength    = {this.state.maxlength}
                                tHeadTop     = {this.state.tHeadTop}
                                fixed        = {this.state.fixed}
                            />
                        );
                    })
                }
            </ul>
        )
    }
}