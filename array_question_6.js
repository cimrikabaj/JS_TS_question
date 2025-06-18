//Program that takes an array of numbers and returns the maximum value. (Use reduce)

let arr= [1,2,3,4,54,6,7,8,9,10];
let max= arr.reduce((a,b)=>Math.max(a,b));
console.log(max);