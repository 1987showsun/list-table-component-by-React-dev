# List 列表元件開發

## npm
```sh
  npm i react-table-list-beta
```

## git
```sh
  https://github.com/1987showsun/list-table-component-by-React-dev
```

## Ex columns json
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
    {
      "title"     : "鱼种",            //column名稱
      "columnKey" : "name",           //keyname
      "total"     : "",               //該欄為統計，如：輸入文字就直接顯示文字，可空直就將該欄位相加得到總合
      "link"      : true,             //開啟該欄位連結
      "path"      : "/xxxx/zzzz/aaaa" //欄位網址
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

## Ex Data json
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

## Ex instructions:
```js
  <List 
    total           = { total }
    limit           = { limit }
    columns         = { thead['test'] }
    data            = { data }
    currentPage     = "1"                              //current pagenumber
    paginationStyle = "model1"                         //pagination style
    paginationPath  = {`/nowPageType`}                 //Url Path
    paginationSearch= {""}                             //loaction.search ?aaaa=111111&bbbb=222222.....
    reload          = { this.reloadAData.bind(this) }  //callback
    columnMinWidth  = { this.state.fixedWidth }        //column min width
    fixed           = {["thead","tfooter"]}            //fixed table head & table footer
    typeStyle       = "block" or "list"                //Display method
    addClassName    = "xxx"                            //Additional class name
  />
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
| reload           | reload={ this.callbackfunction.bind(this) }               | callbackfunction Free name              |
| fixed            | fixed={["thead","tfooter"]}                               | 可上下固定或其中一個固定<br/> typeof：object <br/> status： <br/> 1.thead<br/>2.tfooter  |
| showLength       | showLength={showLength number}                            | columns 一次可顯示比數                        |
| typeStyle        | typeStyle= "block" / "list"                               | Display method Block or Column              |
| addClassName     | addClassName= "XXXX"                                      | Additional class name                       |

## Demo Image
### typeStyle : list
![alt text](https://s3-ap-northeast-1.amazonaws.com/showtest/Users/showsun/react_img/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2018-08-01+%E4%B8%8B%E5%8D%885.58.55.png)
