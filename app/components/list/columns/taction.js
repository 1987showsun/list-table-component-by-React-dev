import React                                    from 'react';
import { Link }                                 from 'react-router-dom';
import { FaPencilAlt,FaTrashAlt,FaLink,FaInfo } from 'react-icons/fa';

export default class Action extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            propsItem: props.item,
            tHeadKey : props.tHeadKey,
            tHead    : props.tHead
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            propsItem: nextProps.item,
            tHeadKey : nextProps.tHeadKey,
            tHead    : nextProps.tHead
        });
    }

    render(){
        return(
            <li className={`${this.state.tHeadKey}`}>
                <div className="tool">
                    {
                        this.state.tHead[this.state.tHeadKey].map((actionItem,b)=>{
                            let itemStyle = actionItem['style'] || {};
                            if( ['edit','delete'].some((wantCheckItem,i)=>{ return wantCheckItem==actionItem['key'] }) ){
                                switch ( actionItem['key'] ) {
                                    case "edit":
                                        return(
                                            <span key={b} className={`tool-btn ${actionItem["key"]} ${actionItem["icon"] || ""}`} title={actionItem['text']||""} style={itemStyle}>
                                                { 
                                                    actionItem['text'] != ""?(
                                                        actionItem['text']
                                                    ):(
                                                        <FaPencilAlt />
                                                    )  
                                                }
                                            </span>
                                        );
                                        break;
                                    
                                    case "delete":
                                        return(
                                            <span key={b} className={`tool-btn ${actionItem["key"]} ${actionItem["icon"] || ""}`} title={actionItem['text']||""} style={itemStyle}>
                                                { 
                                                    actionItem['text'] != ""?(
                                                        actionItem['text']
                                                    ):(
                                                        <FaTrashAlt />
                                                    )  
                                                }
                                            </span>
                                        );
                                        break;

                                    default:
                                        return(
                                            <span key={b} className={`tool-btn ${actionItem["key"]} ${actionItem["icon"] || ""}`} title={actionItem['text']||""} style={itemStyle}>{ actionItem['text']||""  }</span>
                                        );
                                        break;
                                }
                            }else{
                                switch ( actionItem['key'] ) {
                                    case "info":
                                        return(
                                            <Link key={b} className={`tool-btn ${actionItem["key"]} ${actionItem["icon"] || ""}`} title={actionItem['text']||""} to={`${actionItem["path"]||""}/${this.state.propsItem['id'] || this.state.propsItem['_id']||""}`||""} style={itemStyle}>
                                                { 
                                                    actionItem['text'] != ""?(
                                                        actionItem['text']
                                                    ):(
                                                        <FaLink />
                                                    )  
                                                }
                                            </Link>
                                        );
                                        break;
                                    
                                    case "more":
                                        return(
                                            <Link key={b} className={`tool-btn ${actionItem["key"]} ${actionItem["icon"] || ""}`} title={actionItem['text']||""} to={`${actionItem["path"]||""}/${this.state.propsItem['id'] || this.state.propsItem['_id']||"" }`||""} style={itemStyle}>
                                                { 
                                                    actionItem['text'] != ""?(
                                                        actionItem['text']
                                                    ):(
                                                        <FaInfo />
                                                    )  
                                                }
                                            </Link>
                                        );
                                        break;

                                    default:
                                        return null;
                                        break;
                                }
                            }
                        })
                    }
                </div>
            </li>
        );
    }
}