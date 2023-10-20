let age = prompt("ENter ur age!")

function findAdult()
{
    if(age<18 && age>0)    {
        alert("Your are a kid")
    }
    else if(age>=18)
    {
        alert("u r an adult")
    }
    else{
        alert("Please enter ur age again, nd this tym a positive int")
    }
}

findAdult()