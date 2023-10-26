// // array methods in simplestway
// let arr = [1,2,3,4,5];

// let print = (el) => {  console.log(el) }
// //foreach applies the callback 1by1 on each element
// arr.forEach(print);


// /map func applies callback on each element of array 1 by 1 and thn returns new array as result of ths op while og array remains unchanged
//if map doesnt returns any value then it returns an array of same size with undefined as elements
let num = [1,2,3,4];

let double = num.map((el)=>{return el*2})
console.log(num,"new num = ",double)

//filter returns a new array and adds element if the callback is true 

num = [1,2,3,4,5,6,7,8,9,10]

let evenNum = num.filter((el)=> { return el%2==0 })

console.log(evenNum)

//every func returns true if all the elements of array return ture for a func callback

num = [1,2,3,4,5]

let cond = num.every((el) => el<=5 )
console.log(cond)
//some also as every bt works for some values only
//reduce funciton returns 1 sigle value, it can be of any typ and any valye. it takes two args - 1 accumulator andn 1 element
console.log([1,2,3,4,5,6,7,8,9,10].reduce((sum,el)=> sum+el ))