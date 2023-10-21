let limit = parseInt(prompt("enter the number upto which you want the sum of"))

function sum(n)
{
    let sum = 0;
    for(let i = 1;i<=n;i++)
        sum+=i;
    return sum;
}

alert(`sum of 1 to ${limit} = ${sum(limit)}`)