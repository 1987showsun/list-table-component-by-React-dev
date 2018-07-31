import React            from 'react';
import { Link }         from 'react-router-dom';

export default class Item extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            link : props.link     || false,
            data : props.tBody    || [],
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data : nextProps.tBody
        })
    }

    render(){
        return this.state.data.map((item,i)=>{
            return (
                <li key={i}>
                    <figure>
                        {
                            this.props.tHead.map((tHead,h)=>{
                                if( tHead.hasOwnProperty('children')  ){
                                    if( tHead['children']!=null  ){
                                        if( tHead['link'] ){
                                            return (
                                                <figcaption key={`figcaption${h}`}>
                                                    <Link to={`${tHead['path']}/${item['_id']}`}>
                                                        {
                                                            tHead['children'].map((key,c)=>{
                                                                return (<p key={`con${c}`}>{ typeof(item[key])=="object"? item[key].toString():item[key] }</p>);
                                                            })
                                                        }
                                                    </Link>
                                                </figcaption>
                                            );
                                        }else{
                                            return (
                                                <figcaption key={`figcaption${h}`}>
                                                    {
                                                        tHead['children'].map((key,c)=>{
                                                            return (<p key={`con${c}`}>{ item[key].toString() }</p>);
                                                        })
                                                    }
                                                </figcaption>
                                            );
                                        }
                                        
                                    }
                                }else{
                                    if( tHead['columnKey']=='cover' ){
                                        if( tHead['link'] ){
                                            return (
                                                <Link key={`cover${h}`} to={`${tHead['path']}/${item['_id']}`} key={i}>
                                                    <img src={item['cover']} alt="" title="" />
                                                </Link>
                                            );
                                        }else{
                                            return <img key={`cover${h}`} src={item['cover']} alt="" title="" />;
                                        }
                                    }
                                }
                            })
                        }
                    </figure>
                </li>
            );
        });
    }
}