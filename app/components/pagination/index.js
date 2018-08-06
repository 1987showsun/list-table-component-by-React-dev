import React                        from 'react';
import { Link }                     from 'react-router-dom';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

//Components
import Item                         from './item';

import './pagination.scss';

export default class Pagination extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            paginationStyle : props.paginationStyle || "model1",
            match           : props.match           || {},
            currentPage     : props.currentPage     || 1,
            path            : props.path            || "",
            serach          : props.serach          || "",
            total           : props.total           || 0,
            limit           : props.limit           || 10,
            pagination      : [],
        }
    }

    componentDidMount() {
        this.paginationPush();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            paginationStyle : nextProps.paginationStyle || "model1",
            total           : nextProps.total           || 0,
            limit           : nextProps.limit           || 10,
            match           : nextProps.match           || {},
            currentPage     : nextProps.currentPage     || 1,
            path            : nextProps.path            || "",
            serach          : nextProps.serach          || "",
        },()=>{
            this.paginationPush();
        })
    }

    paginationPush(){
        const pagination  = [];
        const total       = this.state.total;
        const limit       = this.state.limit;
        const totalPage   = Math.ceil(total/limit);

        switch( this.state.paginationStyle ){
            case "model1":
                for( let i=0 ; i < totalPage ; i++ ){
                    pagination.push( <Item key={i} text={i+1} path={this.state.path} serach={this.state.serach} callback={this.callback.bind(this)} currentPage={this.props.currentPage}/> );
                }
                break;
            
            case "model2":
                let current   = Number(this.state.currentPage);
                if( current==1 ){
                    pagination[0]= <li key="1" className="pointerEvents"><Link to={`${this.state.path}/${current-1}${this.state.serach}`} onClick={this.callback.bind(this,current-1)} className="changePageBtn"><FaAngleLeft/></Link></li>;
                    pagination[1]= <li key="2" className="currentInfo">{`${current} / ${totalPage}`}</li>
                    pagination[2]= <li key="3"><Link to={`${this.state.path}/${current+1}${this.state.serach}`} onClick={this.callback.bind(this,current+1)} className="changePageBtn"><FaAngleRight /></Link></li>;
                }else if( current>=totalPage ){
                    pagination[0]= <li key="1"><Link to={`${this.state.path}/${current-1}${this.state.serach}`} onClick={this.callback.bind(this,current-1)} className="changePageBtn"><FaAngleLeft/></Link></li>;
                    pagination[1]= <li key="2" className="currentInfo">{`${current} / ${totalPage}`}</li>
                    pagination[2]= <li key="3" className="pointerEvents"><Link to={`${this.state.path}/${current+1}${this.state.serach}`} onClick={this.callback.bind(this,current+1)} className="changePageBtn"><FaAngleRight /></Link></li>;
                }else{
                    pagination[0]= <li key="1"><Link to={`${this.state.path}/${current-1}${this.state.serach}`} onClick={this.callback.bind(this,current-1)} className="changePageBtn"><FaAngleLeft /></Link></li>;
                    pagination[1]= <li key="2" className="currentInfo">{`${current} / ${totalPage}`}</li>
                    pagination[2]= <li key="3"><Link to={`${this.state.path}/${current+1}${this.state.serach}`} onClick={this.callback.bind(this,current+1)} className="changePageBtn"><FaAngleRight /></Link></li>;
                }
                break;
            
            default :
                break;
        }
        
        
        this.setState({
            pagination
        })
    }

    callback( selectedCP ){
        let match   = this.state.match;
        let current = match['params']['current'];
        if( this.props.returnCurrentPage!=undefined ){
            if( current!=selectedCP ){
                this.props.returnCurrentPage( selectedCP );
            }
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