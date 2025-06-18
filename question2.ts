// 2.Create a Student class that inherits from the Person class. Add a studentId (string) property and override the greet() method to include the student ID. Instantiate the class and call the greet() method.


class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public greet():void{
        console.log(`Hello, My name is ${this.name} and I am ${this.age}`);
    }
}

class student extends Person{
    studentid: string;

    constructor(name: string, age: number, studentid: string){
        super(name, age);
        this.studentid = studentid;
    }

    public greet():void{
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old and my studentId is ${this.studentid}.`);
    }
}

const student1 = new student("Ram",23,"S123");
student1.greet();