let arr = [10,20,30,20,50];

let check = arr.every((el) =>  el % 10 == 0);

console.log(check)

if(check){
    console.log("all elements are multiple of 10")
}else {
    console.log("all elements are not multiple of 10")
}

let arr1 = [11,22,10,2,4,23432,44,2324,43]

let min = arr1.reduce((min,el) => {
    if(min < el)
    {
        return min;
    }else{
        return el;
    }
});

console.log("min element is ",min)