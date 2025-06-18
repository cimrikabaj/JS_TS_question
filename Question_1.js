//Question no 1: program to take a string input and capitalize the first letter and put space if in camelcase

let text = prompt("enter any string:");

function assignmentOne(text){
    let empty_str=text.charAt(0).toUpperCase();
    let i=1;
    while(i<text.length){
        if (text.charAt(i) === text.charAt(i).toUpperCase()){
            empty_str+= " "+text.charAt(i);
        }
        else{
            empty_str+= text.charAt(i);
        }
        i=i+1;
    }
    return empty_str;
}

alert(assignmentOne(text));
// console.log(assignmentOne("appleBanana"));

