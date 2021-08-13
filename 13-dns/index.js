const dns = require('dns')


/*
lookup 第二个参数支持传4或者6表示支持ipv4和ipv6解析
*/
// dns.lookup('www.github.com',(err,address,family) =>{
//     console.log(err,address,family)
// })

// dns.resolve('www.baidu.com','A',(err,address) =>{
//     console.log(address)
// })


/*
dns 反向解析
*/
dns.reverse('8.8.8.8', (err, domains) => {
    console.log(domains)
})