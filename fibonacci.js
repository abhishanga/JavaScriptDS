"use strict"
var fibonacci_normal = (limit) => {
    var a = 0,
        b = 1,
        c = 1;
    for(let i = 2;i <=limit; i++){
        c = a+b;
        a = b;
        b = c;

    }
    return c;

}
console.log(fibonacci_normal(5));
var fibonacci_recursive = (n) => {
    return n < 1 ? 0 : n <= 2 ? 1 : fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

console.log(fibonacci_recursive(5));