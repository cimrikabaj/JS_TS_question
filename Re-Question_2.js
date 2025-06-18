// Question no 2: turn snake case into normal title case

function titleCase(text) {
    let empty_str = text.replace(/_/g, " ");
    empty_str = empty_str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    return empty_str;
}

console.log(titleCase("hello_world_hi")); 