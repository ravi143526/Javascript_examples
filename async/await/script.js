
// Async //

// async function loadFile() {
//     let fileLoaded = true;
//     if(fileLoaded) {
//         return "File is loaded";
//     }
//     else{
//         return "File is not loaded";
//     }
// }

// loadFile().then(value => console.log(value))
//             .catch(error => console.log(error))




// Await //

async function loadFile(){
    const promise = new Promise((resolve, reject) => {
        let fileLoaded = true;

        if(fileLoaded){
            resolve("File is loaded");
        }
        else{
            reject("File is not loaded");
        }
    })

    try{
        document.getElementById("mylabel").innerHTML = await promise;
    }
    catch(error){
        console.log(error);
    }
}

loadFile();