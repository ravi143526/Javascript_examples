class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}


class Rabbit extends Animal{

    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }

}

class Fish extends Animal{

    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }

}


class Hawk extends Animal{

    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }

}

const rabbit = new Rabbit("Rabbit",3,45);
const fish = new Fish("Fish",1,50);
const hawk = new Hawk("Hawk",13,500);

console.log(rabbit);
console.log(fish);
console.log(hawk);