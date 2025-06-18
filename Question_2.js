// Question no 2: turn snake case into normal title case
let text = prompt("enter snake case string:");

function titleCase(text){
    let empty_str=text.charAt(0).toUpperCase();
    let i=1;
    while(i<text.length){
        if(text.charAt(i)==="_"){
            empty_str+=" " + text.charAt(i+1).toUpperCase();
            i+=2;
        }
        else{
            empty_str+=text.charAt(i);
            i+=1;
           
        }
    }
    return empty_str;
}

alert(titleCase(text));
// console.log(titleCase("responsive_website_finish"));