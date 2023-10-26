let arr = [11,23,1,2,3,44,5,6,33,10];

let max = arr.reduce((max,el) => { 
    if(max<el){
        return el;
    } else{
        return max;
    }
 })

 console.log(max);