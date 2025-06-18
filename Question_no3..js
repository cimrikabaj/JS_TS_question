//Write a program to demonstrate how an asynchronous task can be executed using Promise.
function checkNumber(a) {
    return new Promise((resolve, reject) => {
        if (typeof a === "number") {
            resolve(a); 
        } else {
            reject("Invalid input"); 
        }
    });
}
checkNumber("Hello")
    .then(result => {
        console.log("The number is:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

