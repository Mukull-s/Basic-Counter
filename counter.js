let countVal = document.querySelector(".counter");



let count = 0;

function increment () {
    let step = parseInt(document.querySelector("#stepInput").value) || 1;
    count += step;
    countVal.innerHTML=  count;
    updateBackground();
}
function decrement () {
    let step = parseInt(document.querySelector("#stepInput").value) || 1;
    count -= step;
    countVal.innerHTML = count
    updateBackground();
}

function reset () {
    count = 0;
    countVal.innerHTML = count;
    updateBackground()

}

function updateBackground () {
    const body = document.body;

    body.classList.remove("bg-green", "bg-red", "default-bg");

    if(count>0) {
        body.classList.add("bg-green");
    }
    else if (count<0) {
        body.classList.add("bg-red");
    }
    else {
        body.classList.remove("default-bg");
    }
}