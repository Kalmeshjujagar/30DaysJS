// Day 2: Operators

// Activity 01: Airthmatic Operators
let a = 12;
let b = 5; 

function addTwo(a, b) {
    let result = (a + b)
    console.log(result)
}
addTwo(a, b)

function mulTwo(a, b) {
    let result = (a * b)
    console.log(result)
}
mulTwo(a, b)

function divTwo(a, b){
    let result = (a / b)
    console.log(result)
}
divTwo(a, b)

function reminderOfDivTwo(a, b){
    let result = (a % b)
    console.log(result)
}
reminderOfDivTwo(a, b)

// use the += operator to add a number to variable and log into console
let c = 10
c += 5
console.log(c)

// use the -= operator to subtract a number from variable and log into console
let d = 10
d -= 5
console.log(d)

// write a program using > and < to campare two numbers
let e = 10
let f = 20
console.log(e > f)
console.log(e < f)

// write a program using >= and <= to campare two numbers
console.log(e <= f)
console.log(e >= f)

// write a program using ==, === and != to campare two numbers
console.log(e == f)
console.log(e === f)
console.log(e != f)

// write a program using && operator to combine two conditions
console.log("using && operator: ", e > f && e < f)

// write a program using || operator to combine two conditions 
console.log("using || operator: ", e > f || e < f)

// write a program using ! operator
console.log("using ! operator: ", !(e > f))

// write a program using ? operator
console.log("using ? operator: ", e > f ? "true" : "false")

// write a progrma using ternary operator, check if the number is positive or nagative
let g = 10
let h = -10
console.log(g > 0 ? "positive" : "negative")
console.log(h < 0 ? "nagative" : "positive")