/*
查询url中从?开始 如果有#就到# 没有就到结束
*/

/*
1.对象序列化为查询字符串
*/
// const queryString = require('querystring')
// const obj = {
//     url:'github.com/webfansplz',
//     name:'yyfeng'
// }
// console.log(queryString.stringify(obj))


/*
2. 查询字符串解析为对象
*/
// const queryString = require('querystring')
// const parseObj = queryString.parse('url=github.com%2Fwebfansplz&name=yyfeng')
// console.log(parseObj)


/*
3.编码查询字符串中的参数
*/
// const queryString = require('querystring')
// console.log(queryString.escape('url=github.com%2Fwebfansplz&name=yyfeng'))

/*
4.解码查询字符串中的参数
*/