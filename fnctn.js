// let age = prompt("ENter ur age!")

// function findAdult()
// {
//     if(age<18 && age>0)    {
//         alert("Your are a kid")
//     }
//     else if(age>=18)
//     {
//         alert("u r an adult")
//     }
//     else{
//         alert("Please enter ur age again, nd this tym a positive int")
//     }
// }
// findAdult()

// function to roll a dice
// function rollDice(){
//     let ranNum = Math.floor(Math.random()*6)+1;
//     alert(`dice rolled u got `+ranNum)
// }
// rollDice();

// function with args
// let a = parseInt(prompt("enter num1 ")) //without parseInt it takes input as string
// let b = parseInt(prompt("enter num2 "))
// alert
// function findSum(x,y)
// {
//     let sum = x+y
//     alert("sum = "+sum)
// }
// findSum(a,b)

//fnctn to calc avg of three num
// function calcAvg(a,b,c){
//     let avg = (a+b+c)/3
//     alert(`the averag is ${avg}`)
// }
// let x = parseInt(prompt("enter num1"))
// let y = parseInt(prompt("enter num2"))
// let z = parseInt(prompt("enter num3"))
// calcAvg(x,y,z)

//table of ay number upto any number
// function table(num,times)
// {
//     let pro;
//     // alert(typeof(times))
//     for(let i = 1;i <=times; i++)
//     {
//         pro = num*i;
//         console.log(`${num} * ${i} = ${pro}`);
//     }
// }
// let num = parseInt(prompt("Enter the num to print table of"))
// let times = parseInt(prompt("Enter the num to print table no. of times"))
// table(num,times)

// function with args
let a = parseInt(prompt("enter num1 ")) //without parseInt it takes input as string
let b = parseInt(prompt("enter num2 "))
alert
function findSum(x,y)
{
    let sum = x+y
    return sum;
}
alert(findSum(a,b))