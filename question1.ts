// 1.Create a Person class with name (string) and age (number) properties. Add a method greet() that logs a greeting message. Instantiate the class and call the greet() method.

class person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public greet():void{
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new person("Ram",23);
person1.greet();