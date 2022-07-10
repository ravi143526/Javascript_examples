
const store = new Map([
    ["t-shirt" , 20],
    ["shirt" , 210],
    ["underwear" , 240],
    ["jeans" , 820],
    ["trousers" , 920],
]);

store.get("t-shirt");

store.set("hat", 234);

store.delete("hat");

console.log(store.has("t-shirt"));

console.log(store.size);


store.forEach((key,value) => {
    console.log(`${value}  $${key}`);
});