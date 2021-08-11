/**
 * node index.js --tips = "hello nodejs"
 * [
  '/usr/local/bin/node',
  '/Users/fengyayun/Documents/my-demo/nodejs-study/04-全局对象process进程/index.js',
  '--tips',
  '=',
  'hello nodejs'
]
*/
// console.log(process.argv)

/**
 * node --harmony index.js
 * [ '--harmony' ]
*/
// console.log(process.execArgv)


/**
 * node 版本
*/
// console.log(process.version)


/**
 * 当前进程id
*/
// console.log(process.pid)


/**
 * 当前工作目录
*/
// console.log(process.cwd())



/**
 * 终止当前进程
*/
// console.log(process.exit())

/**
 * node.js  微任务 比settimeout 效率高 该方法能在任何 I/O 之前调用我们的回调函数。
*/
// console.log('start')
// process.nextTick(() =>{
//     console.log('nextTick')
// })
// console.log('end')


/**
 * process 标准流对象(与其他流不同，流操作都是同步的阻塞的)
 * 1.process.stderr 标准错误流 console.error 就是基于标准错误流实现的
 * 2.process.stdin 标准输入流
 * 3.process.stdout 标准输出流  console.log 就是基于此实现
 * 
*/

process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
  let chunk;
  // 使用循环确保我们读取所有的可用数据。
  while ((chunk = process.stdin.read()) !== null) {
    if (chunk === "\n") {
      process.stdin.emit("end");
      return;
    }
    process.stdout.write(`收到数据: ${chunk}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("结束监听");
});