// Program that takes an array of key value tuple pairs and returns an object from those pairs.

const person = new Map([
    [ 'name', 'ram' ],
    [ 'age', '22' ],
    [ 'address', 'kathmandu' ]
  ]);

//console.log(person);
const result = Object.fromEntries(person);
  console.log(result);
