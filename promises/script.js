
// First way //

const promise = new Promise((resolve,reject) => {
    let fileLoaded = true;
    if(fileLoaded) {
        resolve("File is Loaded");
    }
    else{
        reject("File is Not Loaded");
    }
})

promise.then(value => console.log(value))
       .catch(error => console.log(error))


       

// Second way //

function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return Promise.resolve("File is loaded");
    }
    else{
        return Promise.reject("File is not loaded");
    }
}

loadFile().then(value => console.log(value))
        .catch(error => console.log(error))
