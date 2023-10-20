let limit = prompt("enter the upper limit of the range u wnt to guess the num frm!");

let number = prompt("guess a number and see if u match what i guessed!!! or quit to quit the game");

let ranNum = Math.floor(Math.random()*limit)+1;
// alert(ranNum)

while(true)
{
    if(number === "quit")
    {
        break;
    }

    if(number == ranNum)
    {
        alert("Your won, the number is"+ranNum); break;
    }
    else if(number < ranNum)
    {
        number = prompt("You guessd too small, try larger");
    }
    else
    {
        number = prompt("you guessd too large guess bit smaller num")
    }

}