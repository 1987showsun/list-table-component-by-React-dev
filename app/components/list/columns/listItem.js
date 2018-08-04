import React    from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt,FaTrashAlt,FaLink,FaInfo } from 'react-icons/fa';

//Components
import Thead    from './thead';
import Tfooter  from './tfooter';
import TAction  from './taction';

export default class ListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tHead                      : props.tHead,
            tHeadKey                   : props.tHead['columnKey'] || "",
            title                      : props.tHead['title']     || "",
            sortSwitch                 : props.tHead['sort']      || false,
            link                       : props.tHead['link']      || false,
            path                       : props.tHead['path']      || "",
            data                       : props.tBody              || [],
            totalSwitch                : props.totalSwitch        || false,
            totalObj                   : props.totalObj           || {switch:false,text:""},
            fixedWidth                 : props.fixedWidth         || "",
            maxlength                  : props.maxlength,
            tHeadTop                   : props.tHeadTop           || 0,
            fixed                      : props.fixed              || [],
            [props.tHead['columnKey']] : 0,
        }
    }

    componentWillReceiveProps(nextProps) {
        let sort     = nextProps.sort;
        let tHeadKey = nextProps.tHead['columnKey'] || "";
        sort.filter(item=>{
            if( Object.keys(item)==tHeadKey ){
                this.setState({
                   [ Object.keys(item) ] : item[tHeadKey]
                })
            }
        });

        this.setState({
            tHead               : nextProps.tHead,
            data                : nextProps.tBody,
            tHeadKey            : nextProps.tHead['columnKey'] || "",
            title               : nextProps.tHead['title']     || "",
            totalSwitch         : nextProps.totalSwitch        || false,
            totalObj            : nextProps.totalObj           || {switch:false,text:""},
            fixedWidth          : nextProps.fixedWidth         || "",
            tHeadTop            : nextProps.tHeadTop           || 0,
            fixed               : nextProps.fixed              || [],
        })
    }

    render(){
        return(
            <li className={`${this.state.tHeadKey!="action"? "" : "action"}`}>
                <ul style={{"minWidth":`${this.state.fixedWidth}px`}}>
                    <Thead 
                        tHead        = {this.state.tHead}
                        title        = {this.state.title}
                        sortSwitch   = {this.state.sortSwitch}
                        sort         = {this.props.sort}
                        tHeadKey     = {this.state.tHeadKey}
                        returnSataus = {this.props.returnSataus}
                        fixed        = {this.state.fixed}
                    />
                    {
                        this.state.data.map((item,i)=>{
                            if( this.state.tHeadKey!="action" ){
                                return(
                                    <li key={i}>
                                        {
                                            this.state.link==true ?(
                                                <Link to={`${this.state.path}/${item['id'] || item['_id']||""}`}>{item[this.state.tHeadKey]}</Link>
                                            ):(
                                                <p>{item[this.state.tHeadKey]}</p>
                                            )

                                        }
                                    </li>
                                );
                            }else{
                                return (
                                    <TAction
                                        key      = {i}
                                        item     = {item}
                                        tHeadKey = {this.state.tHeadKey}
                                        tHead    = {this.state.tHead}
                                    />
                                );
                            }
                        })
                    }
                    <Tfooter
                        totalSwitch       = {this.state.totalSwitch}
                        totalObj          = {this.state.totalObj}
                        tHeadKey          = {this.state.tHeadKey}
                        data              = {this.state.data}
                        fixed             = {this.state.fixed}
                    />
                </ul>
            </li>
        );
    }
}