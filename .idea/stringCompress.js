// Function that compresses a string with the number of occurences of the alphabet

"use strict"
var function_compress = (input) => {
    var last = input.charAt(0);
    var compressed_string = '';
    let count= 1;

    for(let i=1; i<input.length; i++){
        if(input.charAt(i) == last)
            count++;
        else {
            compressed_string += last+count;
            last = input.charAt(i);
            count = 1;
        }

    }
    return compressed_string+last+count;
}
console.log(function_compress("aaaaabbbc"));