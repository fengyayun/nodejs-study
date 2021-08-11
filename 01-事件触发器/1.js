const EventEmitter = require('events')

//1.实例
class Application extends EventEmitter {}
const app = new Application()
app.on('hello',(data) =>{
    console.log(data)
})
// setTimeout(() =>{
//     app.emit('hello','helloWorld')
// },5000)

//2.绑定多个事件侦听器 按照注册的顺序同步执行 以及this指向 
class Person extends EventEmitter {}

const person = new Person()
person.on('eat',function(data){
    console.log('1',data)
    console.log('1',this)
})
person.on('eat',(data) =>{
    console.log('2',data)
    console.log('2',this)
})
setTimeout(() =>{
    person.emit('eat','晚饭')
},2000)


// 只调用一次的事件侦听器 
class Dog extends EventEmitter {}
const dog = new Dog()
dog.once('drink',() =>{
    console.log('喝水')
})
dog.emit('drink','喝水')
dog.emit('drink','喝水')
dog.emit('drink','喝水')

// 移除事件侦听器
class Cat extends EventEmitter {}

const cat = new Cat()

function eatFish(){
    console.log('吃鱼')
}
cat.on('eatFish',eatFish)

cat.emit('eatFish')

cat.removeListener('eatFish',eatFish)

cat.emit('eatFish')
cat.emit('eatFish')


