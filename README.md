# List 列表元件開發

## npm
```sh
  npm i react-router-dom react-table-list-beta
```

## git
```sh
  https://github.com/1987showsun/list-table-component-by-React-dev
```

## <a href="https://1987showsun.github.io/list-table-component-by-React-dev/index.html#/">Demo</a>

## Ex columns json
### typeSStyle : list
```js
  [
    {
      "title"     : "鱼种",            //column名稱
      "columnKey" : "name",           //keyname
      "total"     : "",               //該欄為統計，如：輸入文字就直接顯示文字，可空直就將該欄位相加得到總合
      "link"      : true,             //開啟該欄位連結
      "path"      : "/xxxx/zzzz/aaaa",//欄位網址
      "sort"      : true              //排序開關 //status 0:一般排序 1:遞減 2:遞增
    },
    {...},
    {
      "title"     : "鱼种",            //column名稱
      "columnKey" : "fishMoney",      //keyname
      "total"     : "",               //該欄為統計，如：輸入文字就直接顯示文字，可空直就將該欄位相加得到總合
      "link"      : true,             //開啟該欄位連結
      "path"      : "/xxxx/zzzz/aaaa" //欄位網址
    }
  ]
```
### typeSStyle : block （固定）
```js
  [
    {
      "title"     : "Cover",          //column名稱
      "columnKey" : "cover",          //keyname
      "link"      : true,             //開啟該欄位連結
      "path"      : "/info/teams"     //欄位網址
    },
    {
      "title"     : "Content",         //column名稱
      "columnKey" : "",                //有 children keyname 該欄位
      "children"  : ["name","name_en"],//children keyname 非固定，自取名需對應 data keyname
      "link"      : true,              //開啟該欄位連結
      "path"      : "/info/teams"      //欄位網址
    }
  ]
```

## Ex Data json
### typeSStyle : list
```js
  [
    {
      "id"             : "1",
      "name"           : "名稱1",
      "fishMoney"      : 1000
    },
    {...},
    {
      "id"             : "1",
      "name"           : "名稱1",
      "fishMoney"      : 1000
    }
  ]
```
### typeSStyle : block （固定）
```js
  [
    {
      "id"             : "1",
      "cover"          : "",
      "name"           : "名稱1",
      "name_en"        : "abcd"
    },
    {...},
    {
      "id"             : "1",
      "cover"          : "",
      "name"           : "名稱1",
      "name_en"        : "abcd"
    }
  ]
```


## Ex instructions:
```js

  import {BrowserRouter} from 'react-router-dom';
  import List            from 'react-table-list-beta';

  <BrowserRouter>
    ...
    <List 
        match             = { this.props.match }
        total             = { total }
        limit             = { limit }
        columns           = { thead['test'] }
        data              = { data }
        currentPage       = { this.props.match['params']['current'] }
        paginationStyle   = "model1"
        paginationPath    = { `/asd` }
        paginationSearch  = { `?testSearch=zzzz` }
        returnCurrentPage = { this.returnCurrentPage.bind(this) }
        returnSort        = { this.returnSortFreeFunctionName.bind(this) }
        fixedWidth        = { this.state.fixedWidth }
        fixed             = { ["thead","tfooter"] }
    />
    ...
  </BrowserRouter>
```


## Api
| api              | method                                                    | description                                 |
| ---------------- | --------------------------------------------------------- | ------------------------------------------- |
| total            | total={ totalNumber}                                      | ajax response data length                   |
| limit            | limit={ limitNumber}                                      | show data length                            |
| columns          | columns={ columnsObject }                                 | columns json                                |
| data             | data={ response data }                                    | response data json 需要與 columnsKey 取名一樣 |
| currentPage      | currentPage={ current Page Number }                       | current Page number                         |
| paginationStyle  | paginationStyle = {"model1"or"model2"}                    | pagination style                            |
| paginationPath   | paginationPath  = { path link url string }                | 頁碼連結                                     |
| paginationSearch | paginationSearch = { loaction.search }                    | ex: ?aaaa=111111&bbbb=222222.....           |
| returnCurrentPage | returnCurrentPage={ this.returnCurrentPage.bind(this) }               | returnCurrentPage Free name              |
| fixed            | fixed={["thead","tfooter"]}                               | 可上下固定或其中一個固定<br/> typeof：object <br/> status： <br/> 1.thead<br/>2.tfooter  |
| showLength       | showLength={showLength number}                            | columns 一次可顯示比數                        |
| typeStyle        | typeStyle= "block" / "list"                               | Display method Block or Column              |
| addClassName     | addClassName= "XXXX"                                      | Additional class name                       |
| returnSort       | returnSort={this.returnSortFreeFunctionName.bind(this)}   | returnSortFreeFunctionName Name by yourself |


## Demo Image
### typeStyle : list
![alt text](https://s3-ap-northeast-1.amazonaws.com/showtest/Users/showsun/react_img/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2018-08-01+%E4%B8%8B%E5%8D%885.58.55.png)
