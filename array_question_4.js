//Program to take an array of strings and return a new array with each string reversed.

let fruit = ["apple", "banana", "mango", "kiwi"];

function reverseString(name){
    let reversed = name.split("").reverse().join("");
    return reversed;
}
console.log(fruit.map(reverseString));

