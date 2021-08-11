const fs = require('fs')

//1.异步读取
// fs.readFile('./index.txt','utf8',(err,data) =>{
//     console.log(data)
// })


//2.同步读取
// console.log(fs.readFileSync('./index.txt','utf-8'))

//3.创建读取流
// const stream = fs.createReadStream('./index.txt','utf8')
// stream.on('data',data =>{
//     console.log(data)
// })

//4.异步写入文件
// fs.writeFile('./index.txt','Hello Node.js','utf8',err =>{
//     if (err) throw err
// })

// 5.同步写入文件
// fs.writeFileSync('./index.txt','hello NodeJS2')


// 6.文件流写入
const ws = fs.createWriteStream('./index.txt','utf8')
ws.write('hello333')
ws.end()

// 7.异步删除文件
// fs.unlink('./index.txt',err =>{
//     if (err) throw err
// })

// 8.同步删除文件
// fs.unlinkSync('./index.txt')

// 9.异步删除文件夹
// fs.rmdir('./test',err =>{
//     if (err) throw err
// })

// 10.同步删除文件夹
// fs.rmdirSync('./test1')

// 11.异步创建文件夹
// fs.mkdir('./test',err =>{
//     if (err) throw err
// })

// 12.同步创建文件夹
// fs.mkdirSync('./test1')

// 13.同步复制文件/文件夹
// fs.copyFile('./index.txt','./index-c.txt',(err,copyFiles) =>{
//     if (err)  throw err
// })
// 14.异步复制文件/文件夹 fs.copyFileSync

//14.同步获取文件类型
// fs.stat('./index.txt',(err,stats) =>{
//     if (err) throw err
//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
// })

// 15.异步获取文件类型 fs.statSync

//衍生的 fs-extra 框架