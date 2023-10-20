let todo = [];

let req = prompt("please enter your request!");

console.log(req);

while(true){
    if(req == "quit")
    {
        console.log("quitting app");
        break;
    }

    if(req == "list")
    {
        console.log("___________");
        for(let i = 0; i<todo.length;i++)
        {
            console.log(i,"-",todo[i]);
        }
        console.log("___________")
    }

    else if (req == "add")
    {
        console.log("adding")
        let task = prompt("Enter the task u want to add");
        todo.push(task);
        console.log("task added");
    }

    else if( req == "delete")
    {
        console.log("enter the index of task you want to delete");
        let idx = prompt("enter the index of task you want to delete");
        todo.splice(idx,1); 
        console.log("task deleted");
    }

    else{
        console.log("wrong request!!")
    }

    req = prompt("please enter your request!");


}