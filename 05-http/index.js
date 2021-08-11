const http = require('http')
const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('123')
    res.end()
})
server.listen(3000)

//上面就是创建一个服务器