
class Student{

    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying!!!`);
    }
}

const student1 = new Student('Thor',30,6.8);
const student2 = new Student('Cap',32,9.8);


console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();


console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);

student2.study();