function sum(x,y,callbacks) {
    let result =  x + y;
    callbacks(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById('label').innerHTML = output;
    displayConsole(output);
}

sum(2,3,displayDom);
