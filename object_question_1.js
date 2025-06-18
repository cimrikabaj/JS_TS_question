//Program to take 2 objects and merge their keys and values.

const person1 = {
    name: "ram",
    age: 25,
    address: "nepal"
  };
  
const person2 = {
    name: "sita",
    age: 23
  };

//using spread operator
const persons = {...person1, ...person2};
console.log(persons);

//using assign() method
const personstwo = Object.assign(person1, person2);
console.log(personstwo);