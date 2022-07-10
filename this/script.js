
const car1 = {
    model : 'Mustang',
    color : "red",
    year : 2017,

    drive : function(){
        console.log(`you can drive ${this.model} car`);
    }
}


const car2 = {
    model : 'tesla',
    color : "blue",
    year : 2020,

    drive : function(){
        console.log(`you can drive ${this.model} car`);
    }
}


car1.drive();

car2.drive();


console.log(this);