// console.log(document);

// console.dir(document);

// console.log(document.title);

// document.title = "Kick ASS!";

// document.location = "http://www.google.com";

let element = document.getElementById("myTitle");

element.style.backgroundColor = "lightgreen";


let items = document.getElementsByName("fruits");

items.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let veggies = document.getElementsByTagName("li");

veggies[1].style.backgroundColor = "red";