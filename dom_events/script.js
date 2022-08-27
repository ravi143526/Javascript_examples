// const elem = document.getElementById("myButton");
// elem.onclick = doSomething;

// const elem = document.body;
// elem.onload = doSomething;

const elem = document.getElementById("myText");
elem.onchange = doSomething;

const elem1 = document.getElementById("myDiv");
// elem1.onmouseover = doSomething;
// elem1.onmouseout = doAnything;
// elem1.onmousedown = doSomething;
// elem1.onmouseup = doAnything;

let btn = document.getElementById("myBtn");
let img1 = document.getElementById("image");
btn.addEventListener("click", doSomething);

function doSomething() {
    // alert("You forgot Something!!!");
    // elem1.style.backgroundColor = "red";
    if(img1.style.display == "none") {
        img1.style.display = "block";
    }
    else{
        img1.style.display = "none";

    }
}

function doAnything() {
    elem1.style.backgroundColor = "green";
}