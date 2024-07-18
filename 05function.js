console.log("write a function to check a number is even or odd")
function checkEvenOdd(a){
    if( a % 2 == 0){
        console.log("even")
    }else{
        console.log("odd");
    }
}
checkEvenOdd(5)


console.log("write a function to calculate squre of a number")
function square(a){
    return a*a
}
let number = 10
let result = square(number)
console.log(result)


console.log("Write a function to find max-value of two num's.");
function checkMax(a, b){
    if(a > b ){
        console.log("a is bigger than b")
    }else{
        console.log("b is bigger tan a")
    }
}
let a = 10;
let b = 20
checkMax(a, b)


console.log("write a function to concatinate two strings")
function concat(a, b){
    return a + " " + b
}
let c = "Hello"
let d = "World !"
let concatinate = concat(c, d)
console.log(concatinate)


console.log("arrow function to calculate sum of two nums");
const twoSum = (a, b) => a + b
let arrSum = twoSum(a, b)
console.log(arrSum)


console.log("arrow function to if a string contains specific charecter and return boolean")
let char = "apple"
const charCheck = (a) => {
    let result = a.includes("a")
    return result
}
let isCharContain = charCheck(char)
console.log(isCharContain)


console.log("function that takes two params and return their product, and give default val for 2nd param")
function product(a, b=5){
    return a * b
}
let resultOfProduct = product(5)
console.log(resultOfProduct)


console.log("function that take person's name and age, return greeting message and give default age")
function person(name, age=21){
    let greetings = (`Hello ${name}, Welcome to ${age}'s group`)
    return greetings
}
let naam = "Kalmesh"
let age = 22
let greetingToPerson = person(naam, age)
console.log(greetingToPerson)


console.log("Write a higher order function that take function and number and calls the function that many times")
let numberOfTimes = 5
function sayHello(){
    console.log(`Hello ${naam}, How are you`)
}

function nTimes(func, n){
    for (let i = 0; i < n; i++) {
        func();
    }
}

nTimes(sayHello, numberOfTimes)


console.log("write a higher value function that take two function and value, applies first function to value and second function to result")
let taliv = 100
function add(a){
    return a + 10
}

function sub(a){
    return a - 10
}

function higherValue(a, func1, func2){
    let result = func1(a)
    let result2 = func2(result)
    return result2
}

let highResult = higherValue(taliv, add, sub)
console.log(highResult)



function higherValueFunction(func1, func2, value) {
    let result1 = func1(value);
    let finalResult = func2(result1);
    return finalResult;
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

let resultx = higherValueFunction(double, square, 3);
console.log(resultx);
