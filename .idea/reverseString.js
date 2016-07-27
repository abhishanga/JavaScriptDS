// Reverse words in a string
"use strict"
var input;
var reverse_input = (input) =>{
    return input.split(' ').reverse().join(' ');
}
console.log(reverse_input("My name is Abhishanga"));

//Reverse letters in a string

var reverse_letters = (input) =>{
    return input.split('').reverse().join('');
}
console.log(reverse_letters("My name is Abhishanga"));