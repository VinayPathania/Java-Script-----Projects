


const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector('#joke-btn');


// USING PROMISES

// const generateJoke = () => {

//     const setHeader = {
//         headers:{
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res) => res.json())
//     .then((data) =>{
//         jokes.innerHTML = `" ${data.joke} "`;
//     }).catch ((error) =>{
//         console.log(error);
//     })

// }


// USING ASYNC AWAIT

const generateJoke = async () => {

try{
    const setHeader = {
        headers:{
            Accept: "application/json"
        }
    }

   const res = await fetch('https://icanhazdadjoke.com',setHeader);
        const data  = await res.json();
        jokes.innerHTML = `" ${data.joke} "`;
}catch(err){
    console.log(err);
}
    

}


jokeBtn.addEventListener('click',generateJoke);
generateJoke();



// // 1. CALL API USING FETCH 

// fetch()