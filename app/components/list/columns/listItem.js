import React    from 'react';
import { Link } from 'react-router-dom';
import NP       from 'number-precision';

//Components
import Thead    from './thead';

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

    componentDidMount() {
        test(this.state.tHeadKey,this.state.data);
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
            totalSwitch         : nextProps.totalSwitch,
            totalObj            : nextProps.totalObj           || {switch:false,text:""},
            fixedWidth          : nextProps.fixedWidth         || "",
            tHeadTop            : nextProps.tHeadTop           || 0,
            fixed               : nextProps.fixed              || [],
        })
    }

    sortACtion(sortKey){
        let sortStatus = this.state[sortKey];
        sortStatus ++;
        if( sortStatus>2 ){
            sortStatus=0;
        }
        this.setState({
            [sortKey] : sortStatus
        },()=>{
            this.props.returnSataus( sortKey,sortStatus );
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
                                    <li key={i} className={`${this.state.tHeadKey}`}>
                                        <div className="tool">
                                            {
                                                this.state.tHead[this.state.tHeadKey].map((item,b)=>{
                                                    if( item['key']!="more" ){
                                                        return(
                                                            <span key={b} className={`tool-btn ${item["key"]} ${item["icon"] || ""}`} title={item['text']||""} style={itemStyle}>{ item['text']||""  }</span>
                                                        );
                                                    }else{
                                                        return(
                                                            <Link key={b} className={`tool-btn ${item["key"]} ${item["icon"] || ""}`} title={item['text']||""} to="">{ item['text']||"" }</Link>
                                                        );
                                                    }
                                                })
                                            }
                                        </div>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        this.state.totalSwitch==true?(
                            this.state.totalObj['text']!=""?(
                                <li className="list-total">{this.state.totalObj['text']}</li>
                            ):(
                                this.state.totalObj['switch']==true?(
                                    <li className="list-total">{ test(this.state.tHeadKey,this.state.data) }</li>
                                ):(
                                    <li className="list-total">--</li>
                                )
                            )
                        ):(
                            null
                        )
                    }
                </ul>
            </li>
        );
    }
}

const test = (key,data) => {
    let sum = 0;
    const nuArray = data.map((item,i)=>{
        if( !isNaN(Number(item[key])) ){
            if (item[key]) {
                sum = NP.plus(sum, item[key]);
            }
        }
    });

    if( sum%1===0 ){
        sum = sum+'.00';
    }

    return sum;
}