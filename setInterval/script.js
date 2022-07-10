let count = 0;
let max = window.prompt("enter a number of ypur choice");
max = Number(max);

let timer1 = setInterval(countUp,2000,max);
function countUp() {
    count += 1;
    console.log(count);
    if(count == max) {
        clearInterval(timer1);
    }
}