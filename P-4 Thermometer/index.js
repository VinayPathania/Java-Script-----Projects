let temp = document.querySelector("#temp");

function tempLoad(){
    temp.innerHTML = `<i class="fa-solid fa-temperature-empty"></i>`;

    setTimeout(function(){
        temp.innerHTML = `<i class="fa-solid fa-temperature-empty"></i>`;
        temp.style.color = "white";
    },1000);
    setTimeout(function(){
        temp.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i>`;
        temp.style.color = "orange";
    },2000);

    setTimeout(function(){
        temp.innerHTML = `<i class="fa-solid fa-temperature-half"></i>`;
        temp.style.color = "orange";
    },3000);

    setTimeout(function(){
        temp.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>`;
        temp.style.color = "orange";
    },4000);

    setTimeout(function(){
        temp.innerHTML = `<i class="fa-solid fa-temperature-full"></i>`;
        temp.style.color = "red";
    },5000);
}


tempLoad();


//FOR INFINITE LOOP
setInterval(tempLoad,6000);