const counterEl = document.querySelector(".counter");

const barEL = document.querySelector(".loading-bar-front");

// counterEl.innerText = "20%"

let idx = 20;

updateNum()

function updateNum(){
    counterEl.innerText = idx +"%"
    barEL.getElementsByClassName.width = idx + "%"
    idx++
    if (idx < 101){
        setTimeout(updateNum, 30);
    }
}