// Program to delete duplicate characters
"use strict"
var input;

var function_find_unique = (input) => {
    var unique='';
    for(let i=0 ; i<input.length; i++){
        if(input.lastIndexOf(input[i]) == input.indexOf(input[i]))
            unique+=input[i];
    }
    return unique;
}
console.log(function_find_unique('Abhishanga'));