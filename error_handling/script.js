try{

    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw 'Is not a number'
    if(x == '') throw 'Enter a number'

}
catch(error){
    console.log(error);
}