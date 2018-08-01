import React                               from 'react';
import ReactDOM                            from 'react-dom';
import { BrowserRouter }                   from "react-router-dom";

//Components
import List                                from './components/list';

//CSS
import './public/stylesheets/style.scss';

const columns = [
  {
      "title"     : "鱼种",
      "columnKey" : "name",
      "total"     : "共计",
      "link"      : true,
      "path"      : "info",
      "sort"      : true
  },
  {
      "title"     : "炮倍",
      "columnKey" : "rate",
      "sort"      : true
  },
  {
      "title"     : "单价",
      "columnKey" : "fishMoney"
  },
  {
      "title"     : "总价值",
      "columnKey" : "totalMoney",
      "total"     : ""
  },
  {
      "title"     : "子弹收入",
      "columnKey" : "bulletMoney"
  },
  {
      "title"     : "盈利",
      "columnKey" : "earn",
      "total"     : ""
  },
  {
      "title"     : "仍存活(条)",
      "columnKey" : "alive",
      "total"     : ""
  },
  {
      "title"     : "被捕获",
      "columnKey" : "dead"
  },
  {
    "title"       : "動作",
    "columnKey"   : "action",
    "action"      : [
      {
        "key"   : "edit",
        "text"  : "修改",
        "icon"  : ""
      },
      {
        "key"   : "delete",
        "text"  : "修改",
        "icon"  : ""
      },
      {
        "key"   : "info",
        "text"  : "修改",
        "icon"  : ""
      }
    ]
  }
]

const total   = 10;
const limit   = 10;
const data    = [
  {
    "id"             : "1",
    "name"           : "名稱1",
    "rate"           : 100,
    "fishMoney"      : 1000,
    "totalMoney"     : 0.8,
    "bulletMoney"    : 0.7,
    "earn"           : 10,
    "alive"          : 120,
    "dead"           : ""
  },
  {
    "id"             : "2",
    "name"           : "名稱2",
    "rate"           : 100,
    "fishMoney"      : 1000,
    "totalMoney"     : 0.8,
    "bulletMoney"    : 0.7,
    "earn"           : 10,
    "alive"          : 120,
    "dead"           : ""
  },
  {
    "id"             : "3",
    "name"           : "名稱3",
    "rate"           : 100,
    "fishMoney"      : 1000,
    "totalMoney"     : 0.4,
    "bulletMoney"    : 0.7,
    "earn"           : 10,
    "alive"          : 120,
    "dead"           : ""
  },
  {
      "id"             : "4",
    "name"           : "名稱4",
    "rate"           : 100,
    "fishMoney"      : 1000,
    "totalMoney"     : 0.8,
    "bulletMoney"    : 0.7,
    "earn"           : 10,
    "alive"          : 120,
    "dead"           : ""
  },
  {
      "id"             : "5",
    "name"           : "名稱5",
    "rate"           : 100,
    "fishMoney"      : 1000,
    "totalMoney"     : 0.8,
    "bulletMoney"    : 0.7,
    "earn"           : 10,
    "alive"          : 120,
    "dead"           : ""
  },
  {
      "id"             : "6",
    "name"           : "名稱6",
    "rate"           : 100,
    "fishMoney"      : 1000,
    "totalMoney"     : 0.8,
    "bulletMoney"    : 0.7,
    "earn"           : 10,
    "alive"          : 120,
    "dead"           : ""
  }
]

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        fixedWidth : 100,
    }
  }

  reloadAData(){

  }

  render(){
    return(
      <BrowserRouter>
        <List 
            total           = { total }
            limit           = { limit }
            columns         = { columns }
            data            = { data }
            currentPage     = "1"
            paginationStyle = "model1"
            paginationPath  = {`/nowPageType`}
            paginationSearch= {""}
            reload          = { this.reloadAData.bind(this) }
            fixedWidth      = { this.state.fixedWidth }
            fixed           = {["thead","tfooter"]}
        />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
