//WAP to print key and value in 'key-value' format of given object.

var myObj = {city : "Kathmandu", state : "Bagmati", country : "Nepal"}
for(let x in myObj){
    console.log("Key:",x," ","Value:",myObj[x]);
}