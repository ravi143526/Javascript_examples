let myNum = 12345.568;

myNum = myNum.toLocaleString("en-US");
console.log(myNum);

myNum = myNum.toLocaleString("hi-IN");
console.log(myNum);

myNum = myNum.toLocaleString("de-DE");
console.log(myNum);


myNum = myNum.toLocaleString("en-US", {style : "currency",currency : "USD"});
console.log(myNum);

myNum = myNum.toLocaleString("hi-IN", {style : "currency",currency : "INR"});
console.log(myNum);

myNum = myNum.toLocaleString("de-DE", {style : "currency",currency : "EUR"});
console.log(myNum);

myNum = myNum.toLocaleString(undefined, {style : "percent"});
console.log(myNum);