

//regular or named function
function x()
{
    console.log("hello")
}
x()

//function with parameters
function sum(p1,p2)
{
    console.log(p1+p2)
}
sum(10,20)
sum(40,60)

//function with return type
function add(p1,p2)
{
    return p1+p2
}
console.log(add(10,20))

//anonymous function
/*---
function()
{
    console.log('hello')
}
----*/
//function with expression
let x2=function()
{
    console.log('hello')
}
x2()

//arrow function
let a=()=>{console.log('hello')}
a()

let b=()=>{console.log('hello'),console.log('world')}
b()

let c=()=>{
    console.log('good')
    console.log('morning')
}
c()

//arrow function using addition
let sum1=(p1,p2)=>{
    console.log(p1+p2)
}
sum1(10,20)

//return statement
let sum2=(p1,p2)=>{
    return p1+p2
}
console.log(sum2(10,30))

//if we have only one statement we can remobe flower braces
let sum3=(p1,p2)=> p1+p2
console.log(sum3(10,30))

//if we have only one parameter we can remove parenthensis
let sq=(a)=>a*a
console.log(sq(2))

let sq1=a=>a*a
console.log(sq1(2))

//normal function
function demo(p1,p2)
{
    return p1+p2
}
console.log(demo(10,20))

//removing braces in normal function
function demo1(p1,p2){
     p1+p2
}
console.log(demo1(10,20)) //it doesnt work

//arity function
//nullary function
function a1()
{
    console.log('hello')
}
a1()

//for checking how many parameters
function a1()
{
    return 'hello'
}
console.log(a1.length)

//unary function
function a2(p1)
{
    console.log(p1*p1)
}
a2(2)

function a2(p1)
{
    return p1*p1
}
console.log(a2.length)

//binary function
function a3(p1,p2)
{
    console.log(p1+p2)
}
a3(2,3)

function a3(p1,p2)
{
    return p1+p2
}
console.log(a3.length)

//n-ary function
function a4(p1,p2,p3,p4,p5)
{
    return p1+p2+p3+p4+p5
}
console.log(a4.length)

//closures
//using with normal example
function demo11()
{
    let x=10
    function demo22()
    {
        console.log(x)
    }
    demo22()
}
demo11()

//using closures
function demo123()
{
    let x=10
    function demo231()
    {
        console.log(x)
    }
    return demo231
}
let res=demo123()
res()

//realtime example for closures
function createCounter()
{
    let count=0
    return function()
    {
        count=count+1
        return count
    }
}
let counter=createCounter()
console.log(counter())
console.log(counter())
console.log(counter());



//immediate invoke function
(function()
{
    console.log("hello")
})()


//hof with callback
function summation(n1,n2,next) //hof -->n1--x1-->2 ,n2-y1--->3 square-->next
{
    let summation=n1+n2 //summation=2+3-->5
    return next(summation) //--->next(5)
}
function square(n) //next(5) //callbackfunction
{
    console.log(n**2) //5**2 //25
}
let x1=2
let y1=3
summation(x1,y1,square)


//generator function
function * generator()
{
    yield 'ram'
    yield 'laxman'
    yield 'ravana'
}
let result=generator()
console.log(result.next().done)
console.log(result.next().value)
console.log(result.next().done)
console.log(result.next().done)










