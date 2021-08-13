const { URL } = require('url')
const myUrl = new URL('https://github.com/webfansplz#hello')
console.log(myUrl);
/*
URL {
  href: 'https://github.com/webfansplz#hello',
  origin: 'https://github.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'github.com',
  hostname: 'github.com',
  port: '',
  pathname: '/webfansplz',
  search: '',
  searchParams: URLSearchParams {},
  hash: '#hello'
}
URL 中的属性除了origin 和 searchParams是只读的,其他的都是可写的
*/

// 2.序列化URL
// console.log(myUrl.href)
// console.log(myUrl.toString())
// console.log(myUrl.toJSON())