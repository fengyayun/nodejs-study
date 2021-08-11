// 处理文件路径和目录路径的  不同的操作系统表现有所差异
const path = require('path')

//1. 获取目标文件的路径
// ../02-path模块
// console.log(path.dirname('../02-path模块/1.js')) 

//2.获取路径的扩展名
//.js
// console.log(path.extname('../02-path模块/1.js')) 

//3.是否是绝对路径
// console.log(path.isAbsolute('../02-path模块/1.js')) false
// console.log(path.isAbsolute('https://github.com/webfansplz/article/issues/23')) false

//4.拼接路径片段
///path/example/index.js
// console.log(path.join('/path','example','index.js'))

//5 将路径编译成绝对路径
// /Users/fengyayun/Documents/my-demo/nodejs-study/02-path模块/1.js
// console.log(path.resolve('../02-path模块//1.js'))

//6.规范化路径
///path/exmple/index.js
// console.log(path.normalize('/path///exmple/index.js'))

//7解析路径
// {
//     root: '/',
//     dir: '/path/example',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
// console.log(path.parse('/path/example/index.js'))

// 8.序列化解析后的路径

// path.format({
//     root: '/',
//     dir: '/path/example',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }) // /path/example/index.js

// 9.获取from到to的相对路径
// ../..
// path.relative('/path/example/index.js', '/path') 

