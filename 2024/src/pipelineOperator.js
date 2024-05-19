// Pipe Operator
// The JavaScript Pipeline Operator (|>) is used for passing the result of one 
// expression into a function. It’s particularly useful for making long chains 
// of functions easier to read. With this operator, the value before it gets 
// sent as input to the function that follows. You simply arrange the functions 
// in the order you want them to act on the input.

// Example
function add(x) {
    return x + 10;
}
function subtract(x) {
    return x - 5;
}
// Without pipeline operator
let val1 = add(subtract(add(subtract(10))));
console.log(val1);

// Using pipeline operator

// First 10 is passed as argument to subtract function then returned value is 
// passed to add function then value we get is passed to subtract and then the 
// value we get is again passed to add function
let val2 = 10 |> subtract |> add |> subtract |> add;
console.log(val2);