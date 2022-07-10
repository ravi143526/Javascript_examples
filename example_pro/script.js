async function getData(callback){
    let response = await fetch('https://fakestoreapi.com/carts');
    let data = await response.json();
    callback(data);
}

getData(getAscData);

let oddUser = [];
let evenUser = [];

function getAscData(array){
    array.forEach(element => {
        if(element.userId % 2 == 0){
            evenUser.push(element.userId);
        }
        else{
            oddUser.push(element.userId);
        }    
    });
    array.filter(element => {
        if(element.products.length % 2 == 0){
            evenUser.push(element.products);
        }
        else{
            oddUser.push(element.products);
        }
    });
    console.log(array);
    console.log(oddUser);
    console.log(evenUser);
}



