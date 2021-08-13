/*
Node.js中有四种基本的流类型
1.Writable - 可写入的数据流(fs.createWriteStream())
2.Readable - 可读取数据的流  (fs.createReadStream())
3.Duplex - 可读又可写的流 net.Socket
4.Transform 在读写过程中可以修改或转换数据的Duplex流 zlib.createDeflate
*/

/*
消费流的API
*/

const http = require('http')
const server = http.createServer((req,res) =>{
    //req 是一个http.IncomingMessage 实例
    //res 是一个http.ServerResponse 实例 它是可写流
    let body = ''
    req.setEncoding('utf8')
    req.on('data',chunk =>{
        body+=chunk
    })
    req.on('end',() =>{
        try{
            const data = JSON.parse(body)
            res.write(typeof data)
            res.end()
        }catch(e){
            res.statusCode = 400
            return res.end('出错了')
        }
    })
})
server.listen(4000)
