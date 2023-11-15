//adding event listener for the button
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let facts = await getFacts();
    // alert(facts)
    let p = document.querySelector("#result");
    p.innerText = facts;
});


// using axios
// import axios from 'axios';
let url = "https://catfact.ninja/fact";

async function getFacts()
{
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e) {
        return "NO FACT FOUND";
    }
}

getFacts();

// find below code for firt request and then catch
// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((resp) => {
//         console.log(resp)
//         resp.json().then((data)=>{
//             console.log(data);
//         })
//     })
//     .catch((error)=>{
//         console.log("ERROR : ",error)
//     });

// find below code for async await

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     let res = await fetch(url);
//     console.log(res);
//     let data = await res.json();
//     console.log(data.fact);
// }

// getFacts()
// console.log("signing off")
//find below code for async wait and try catch
// let url = "https://catfact.ni   nja/fact";

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         console.log(res);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch(e){
//         console.log("Error : ",e);
//     }
// }

// getFacts()
// console.log("signing off")

