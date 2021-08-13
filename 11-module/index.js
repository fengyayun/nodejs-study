// const circle = require('./circle')
// console.log(circle.area(4))


/*
exports和module.exports的区别  如果需要将模块导出为一个函数而并部署作为属性导出
*/

// const square = require('./square')
// console.log(square(3))


/*
访问主模块
*/
// console.log(require.main);
// console.log(module);



/*
解析模块路径 require.resolve
*/
// console.log(require.resolve('./square'));

/*
模块缓存：模块第一次加载会被缓存到require.cache对象中
*/

/*
循环依赖
当require存在循环调用时  模块在返回时可能并不会被执行
加载会copy一个文件返回
*/

/*
文件模块 
如果文件名查找未找到 就会尝试添加.js或.json的扩展名.并再次尝试查找
/home/null 是绝对路径
./ 是相对路径

__dirname 和path.dirname()相同返回当前模块的目录名
*/
