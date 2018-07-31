import React from 'react';
import {Link} from 'react-router-dom';

import List                                from '../list';

const columns = [
    {
        "title"     : "鱼种",
        "columnKey" : "name",
        "total"     : "共计",
        "link"      : true,
        "path"      : "info"
    },
    {
        "title"     : "炮倍",
        "columnKey" : "rate"
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
            <main>
                <List 
                    total           = { total }
                    limit           = { limit }
                    columns         = { columns }
                    data            = { data }
                    currentPage     = "1"
                    paginationStyle = "model2"
                    paginationPath  = {`/nowPageType`}
                    paginationSearch= {""}
                    reload          = { this.reloadAData.bind(this) }
                    fixedWidth      = { this.state.fixedWidth }
                    fixed           = {["thead"]}
                />
            </main>
        );
    }
}