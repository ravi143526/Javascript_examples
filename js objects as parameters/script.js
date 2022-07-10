class Car{
    constructor(name,color,year){
        this.name = name;
        this.color = color;
        this.year = year;
    }
}

const car1 = new Car("Mustang","red",2003);
const car2 = new Car("RollsRoyce","gold",1990);
const car3 = new Car("Audi","white",2017);

 function displayColor(car){
    console.log(car.name);
    console.log(car.color);
    console.log(car.year);
 }


 function colorChange(car,color){
    car.color = color;
 }

 colorChange(car1, "yellow");

 displayColor(car1);