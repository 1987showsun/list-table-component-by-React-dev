# List 列表元件開發

## npm
```sh
  npm i react react-router-dom@4.1.2 number-precision
```

## Ex columns json
```json
  [
    {
      "title"     : "鱼种", //column名稱
      "columnKey" : "name",//keyname
      "total"     : "", //該欄為統計，如：輸入文字就直接顯示文字，可空直就將該欄位相加得到總合
      "link"      : true, //開啟該欄位連結
      "path"      : "/xxxx/zzzz/aaaa" //欄位網址
    },
    {
      "title"     : "鱼种", //column名稱
      "columnKey" : "name",//keyname
      "total"     : "", //該欄為統計，如：輸入文字就直接顯示文字，可空直就將該欄位相加得到總合
      "link"      : true, //開啟該欄位連結
      "path"      : "/xxxx/zzzz/aaaa" //欄位網址
    },
    {
      "title"     : "鱼种", //column名稱
      "columnKey" : "rate",//keyname
      "total"     : "", //該欄為統計，如：輸入文字就直接顯示文字，可空直就將該欄位相加得到總合
      "link"      : true, //開啟該欄位連結
      "path"      : "/xxxx/zzzz/aaaa" //欄位網址
    },
    {...},
    {
      "title"     : "鱼种", //column名稱
      "columnKey" : "fishMoney",//keyname
      "total"     : "", //該欄為統計，如：輸入文字就直接顯示文字，可空直就將該欄位相加得到總合
      "link"      : true, //開啟該欄位連結
      "path"      : "/xxxx/zzzz/aaaa" //欄位網址
    }
  ]
```

## Ex Data json
```json
  [
    {
      "id"             : "1",
      "name"           : "名稱1",
      "rate"           : 100,
      "fishMoney"      : 1000
    },
    {...},
    {
      "id"             : "1",
      "name"           : "名稱1",
      "rate"           : 100,
      "fishMoney"      : 1000
    }
  ]
```

## api
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
| reload           | reload={ this.callbackfunction.bind(this) }               | callbackfunction Free name                  |
| fixed            | fixed={["thead","tfooter"]}                               | 可上下固定或其中一個固定 type:"thead","tfooter" |
| showLength       | showLength={showLength number}                            | columns 一次可顯示比數                        |
