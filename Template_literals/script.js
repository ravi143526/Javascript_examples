let userName = "Bro";
let items = 3;
let total = 75;

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`your total is $${total}`);

let text = 
      `Hello ${userName} <br>
      You have ${items} items in your cart <br>
      your total is $${total}`;

  document.getElementById('text').innerHTML = text;
