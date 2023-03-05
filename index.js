// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
    console.log("Hello, Liz!")
}

function sayHelloToSamip() {
    console.log("Hello, Samip!")
} 
sayHello();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();


function doSomething(thing) {
    console.log(thing);
}
doSomething("anything");
// passing the argument 'anything' into our function

function sayHello(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHello("Guadalupe");
sayHello("Liz");
sayHello("Jane");
sayHello("R3-D2");
sayHello(9);
sayHello("9");
// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"
// first sayHello() function come out as 'Hello, undefined' in terminal :)))

// console.log(firstNAme);

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}! `);
}
say("Goodbye", "Julio");
say("Julio", "hello");


function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

function add(x, y) {
    return x + y;
}
add(1, 2); //didn't give anything in the terminal
console.log(add(1, 2)); // now. I had 3 in the terminal


function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
}
console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
console.log(say("Hello", "Liz"));
//terminal:Hello, Liz!
// undefined
// Hello, Liz!
// undefined
// why those last two fucntions has undefined as a last sentence in the terminal.'Cuz a console.log() doesn't return anything — it just writes something out for the developer to see. In JavaScript, in order to have our function return a value, we need to use the return keyword.

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
console.log(say("Howdy", "partner"));

// function say(greeting, firstName) {
//   console.log("I was called!");
//   return `${greeting}, ${firstName}!`;
// INTERESTING; when this code activated, returns in terminal changes after Hello,9! line. 
//From this code 
// Hello, 9!
// 3
// Hello, Liz!
// Hello, Liz!
// Howdy, partner!
//To this code. cuz they are all the same function. function(say)
//=> Hello, R3-D2!
// Hello, 9!
// I was called!
// I was called!
// 3
// I was called!
// Hello, Liz!
// I was called!
// Hello, Liz!