//Program that takes an array of numbers and a target number and returns true if the target number is in the array

let arr = [1, 56, 2, 3, 4, 8, 5, 6, 87, 89, 33, 45, 12, 0, 2, 3, 9, 8, 7];
let target = 4;

let result = arr.some(a => a === target); 
console.log(result);
