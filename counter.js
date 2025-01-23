const contVal = document.querySelector("#counter");

 function increment(){
    let value = parseInt(contVal.innerHTML);
     value = value + 1;
    contVal.innerHTML = value;
};

 function decrement (){
    let value = parseInt(contVal.innerHTML);
     value = value - 1;
    contVal.innerHTML = value;

};