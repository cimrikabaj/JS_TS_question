//Write a program to demonstrate callback function
function displayResult(result){
    console.log("Result:",result);
}
function multiplication(a,b,callback){
    let result = a * b;
    callback(result);
}
multiplication(5,5,displayResult);