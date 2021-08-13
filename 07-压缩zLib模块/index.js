/*
1.文件压缩 1000多字节压缩成几十个字节
*/
// const zLib = require('zlib')
// const fs = require('fs')
// const gzip = zLib.createGzip()
// const inp = fs.createReadStream('./test.txt')
// const out = fs.createWriteStream('./txt.gz')
// inp.pipe(gzip).pipe(out)


/*
文件解压
*/

// const zLib = require('zlib')
// const fs = require('fs')
// const gunzip = zLib.createGunzip()
// const inp = fs.createReadStream('./txt.gz')
// const out = fs.createWriteStream('./un-zlib.txt')
// inp.pipe(gunzip).pipe(out)


/*
服务器gzip压缩
*/

const fs = require('fs')
const http = require('http')
const zlib = require('zlib')
const filepath = './index.html'

const server = http.createServer((req, res) => {
  const acceptEncoding = req.headers['accept-encoding']
  if (acceptEncoding.includes('gzip')) {
    const gzip = zlib.createGzip()
    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    })
    fs.createReadStream(filepath)
      .pipe(gzip)
      .pipe(res)
  } else {
    fs.createReadStream(filepath).pipe(res)
  }
})

server.listen(4000)

