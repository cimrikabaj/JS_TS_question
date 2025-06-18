//Program to take an array of arrays and return a single flattened array. (Use reduce)

let two_d_array=[[1, 2], [3, 4, 5], [6, 7, 8, 9]];
// let flat_array = two_d_array.flat();//using flat method
// console.log(flat_array);

let flattenedArray = two_d_array.reduce((a,b) => a.concat(b));
console.log(flattenedArray);