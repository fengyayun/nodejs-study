const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('你如何看待null-cli?',answer =>{
    console.log(`感谢你宝贵的意见${answer}`)
    rl.close()
})