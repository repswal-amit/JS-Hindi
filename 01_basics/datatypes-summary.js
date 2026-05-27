// primitive

// 7types : string, Number, Boolean, Null, Undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 276430932674398n

// Reference (Not Primitive)

// Array, Objects, Functions

const heros = ["baalveer","Rudra","sanideval"];

let myObj = {
    name : "Amit",
    age : 22,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myfunction);