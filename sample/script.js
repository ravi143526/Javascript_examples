// let userName = "";
// while(userName == "" || userName == null){
//     userName = prompt("Enter user name");
// }
// console.log("Hello",userName);

// let userName;

// do{
//     userName = prompt("Enter user name");
// }while(userName == "ravi")
// console.log("Hello",userName);


// for(let i=0; i <= 20; i++){
//     if(i == 19){
//         continue;
//     }
//     console.log(i);
// }

// document.getElementById("save").onclick = function(){
//     var name = document.getElementById("name").value;
//     var number =- document.getElementById("number").value;
//     var radio = document.getElementById("radio").value;
//     var checkbox = document.getElementById("checkbox").value;
//     if(name == "" || name == null){
//         alert("Please enter valid name");
//         return false;
//     }
//     else if(number.length < 11){
//         alert("Please enter valid number format");
//         return false;
//     }
//     else if(!radio.checked){
//         alert("Select atleast one option");
//         return false;
//     }
//     else if(!checkbox.checked){
//         alert("Please select atleast one option");
//         return false;
//     }
//     else{
//         return false;
//     }
// }

let i,j;

for(let i = 0; i <=5; i++){
    for(let j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br/>");
}




























