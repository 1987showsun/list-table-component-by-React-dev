# List 列表元件開發

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
