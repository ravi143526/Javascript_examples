
let item = 'Javascript';
let value = 1000;


let timer1 = setTimeout(firstMessage,3000,item,value);
let timer2 = setTimeout(secondMessage,6000);
let timer3 = setTimeout(thirdMessage,9000);


function firstMessage(item,value){
    alert(`Buy this ${item} course for $${value}`);
}

function secondMessage(){
    alert("This is not a Scam!!!");
}

function thirdMessage(){
    alert("Buy it ASAP $$$");
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Buy Now for Exclsive!!!");
}
