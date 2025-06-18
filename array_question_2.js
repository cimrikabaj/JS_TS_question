// Program that takes in an array of numbers and returns an array with only the even numbers.

let num= [1,2,3,4,5,6,7,8,9,10,22,26,29,27,45];
let evenNums = num.filter(x => x % 2 === 0);
console.log(evenNums);