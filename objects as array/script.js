
class Car{
    constructor(name,color,year){
        this.name = name;
        this.color = color;
        this.year = year;
    }
}

const car1 = new Car("Mustang","red",2016);
const car2 = new Car("Audi","white",2000);
const car3 = new Car("Bmw","black",2005);

const cars = [car1, car2, car3];
const car4 = [{name: "RollyRoyce",color : "Marron",year : 19200}];
cars.push(car4);


console.log(cars);