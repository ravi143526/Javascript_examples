class Car{

    static numberOfCars = 0

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log(`3....2.....1.....GO!!!!`);
    }
}

const car1 = new Car("mustang");
const car2 = new Car("Tesla");
const car3 = new Car("BMW");
const car4 = new Car("Audi");
const car5 = new Car("Ferrari");
const car6 = new Car("Rolls Royce");
const car7 = new Car("Nissan");

console.log(Car.numberOfCars);

Car.startRace();