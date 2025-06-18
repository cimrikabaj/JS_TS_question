//Question no 1: program to take a string input and capitalize the first letter and put space if in camelcase

// let text = prompt("Enter a camelCase string:");

function assignmentOne(text) {
    let character = text.split("");
    let result = character.map((char, index) => {
        if (index === 0) {
            return character.toUpperCase();
        } else if (character === character.toUpperCase()) {
            return " " + character;
        } else {
            return character;
        }
    });
    return result.join("");
}

// alert(assignmentOne(text));
console.log(assignmentOne("appleBanana"));
