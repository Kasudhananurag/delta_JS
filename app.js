let btn = document.querySelector('button')
let div = document.querySelector("div");
// console.dir(btn)

// // btn.onclick = function () { console.log("button was clicked") }

// function sayName(){
//     alert("hello")
// }
// btn.addEventListener("click",sayName)

btn.addEventListener("click", function() {
    let randomColor = getRandomColor();
    let h3 = document.querySelector("h2");
    h3.innerText = randomColor;

    
    div.style.backgroundColor = randomColor;


})

function getRandomColor(){
    let r,g,b;
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);

    let color = `rgb(${r},${g},${b})`;

    return color;
}

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    console.log(event.key);
    console.log(event.code);
    console.log("key was released")
})