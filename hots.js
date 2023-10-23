function greeting(func, count)
{
    for(let i = 1;i<=count;i++)
        func();
}

let greet = function hullo(){
    console.log("helllloooo");
}

greeting(greet,10)