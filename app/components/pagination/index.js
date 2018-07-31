import React    from 'react';
import { Link } from 'react-router-dom';

import Item from './item';

import './pagination.scss';

export default class Pagination extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            paginationStyle : props.paginationStyle || "model1",
            match           : props.match || {},
            path            : props.path  || "",
            serach          : props.serach|| "",
            total           : props.total || 0,
            limit           : props.limit || 0,
            pagination      : [],
        }
    }

    componentDidMount() {
        this.paginationPush();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            paginationStyle : nextProps.paginationStyle || "model1",
            total           : nextProps.total,
            limit           : nextProps.limit,
            match           : nextProps.match || {},
            path            : nextProps.path  || "",
            serach          : nextProps.serach|| "",
        },()=>{
            this.paginationPush();
        })
    }

    paginationPush(){
        const pagination = [];
        const total      = this.state.total;
        const limit      = this.state.limit;
        const totalPage = Math.ceil(total/limit);

        switch( this.state.paginationStyle ){
            case "model1":
                for( let i=0 ; i < totalPage ; i++ ){
                    pagination.push( <Item key={i} text={i+1} path={this.state.path} serach={this.state.serach} callback={this.callback.bind(this)} currentPage={this.props.currentPage}/> );
                }
                break;
            
            case "model2":
                let match   = this.state.match;
                console.log( match['params'] );
                let current = match['params']!=undefined? Number(match['params']['current']) : 1;
                if( current==1 ){
                    pagination[0]= <li key="1" className="pointerEvents"><Link to={`${this.state.path}/${current-1}${this.state.serach}`} onClick={this.callback.bind(this,current-1)} className="changePageBtn fas fa-angle-left"></Link></li>;
                    pagination[1]= <li key="2" className="currentInfo">{`${current} / ${totalPage}`}</li>
                    pagination[2]= <li key="3"><Link to={`${this.state.path}/${current+1}${this.state.serach}`} onClick={this.callback.bind(this,current+1)} className="changePageBtn fas fa-angle-right"></Link></li>;
                }else if( current>=totalPage ){
                    pagination[0]= <li key="1"><Link to={`${this.state.path}/${current-1}${this.state.serach}`} onClick={this.callback.bind(this,current-1)} className="changePageBtn fas fa-angle-left"></Link></li>;
                    pagination[1]= <li key="2" className="currentInfo">{`${current} / ${totalPage}`}</li>
                    pagination[2]= <li key="3" className="pointerEvents"><Link to={`${this.state.path}/${current+1}${this.state.serach}`} onClick={this.callback.bind(this,current+1)} className="changePageBtn fas fa-angle-right"></Link></li>;
                }else{
                    pagination[0]= <li key="1"><Link to={`${this.state.path}/${current-1}${this.state.serach}`} onClick={this.callback.bind(this,current-1)} className="changePageBtn fas fa-angle-left"></Link></li>;
                    pagination[1]= <li key="2" className="currentInfo">{`${current} / ${totalPage}`}</li>
                    pagination[2]= <li key="3"><Link to={`${this.state.path}/${current+1}${this.state.serach}`} onClick={this.callback.bind(this,current+1)} className="changePageBtn fas fa-angle-right"></Link></li>;
                }
                break;
            
            default :
                break;
        }
        
        
        this.setState({
            pagination
        })
    }

    callbackChangeBtn( btnStatus ){
        let match   = this.state.match;
        let current = match['params']['current'] || 1;
        if( btnStatus=="pver" ){
            current--;
            if( current<=0 ){
                current == 1;
            }
        }else{
            current++;
        }
        this.props.reload( true,current );
    }

    callback( selectedCP ){
        let match   = this.state.match;
        let current = match['params']['current'];
        if( current!=selectedCP ){
            this.props.reload( true,selectedCP );
        }
    }

    render(){
        return(
            <div className="pagination-wrap">
                <ul className="pagination-ul">
                    {this.state.pagination}
                </ul>            
            </div>
        );
    }
}