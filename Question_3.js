//Question no 3: return the strings between two indices input from the user
let text = prompt("enter any string:");
let start = prompt("enter starting index value:");
let end = prompt("enter ending index value:");

function changingString(text,start,end){
    return text.slice(start,end);
}

alert(changingString(text,start,end));
// console.log(changingString("banana",1,4));
