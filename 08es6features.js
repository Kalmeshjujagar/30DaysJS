let fname = "Nidhi"
let lname = "Jain"
let msg = `Hello ${fname} ${lname}, Welcome to ES6
This is a multi-line string
that spans across multiple lines.
You can use template literals 
to maintain the formatting easily.`
console.log(msg)


console.log("use array destructuring to extract the first and second elements from an array of number and log them to the console.")
let arr = [1, 2, 3, 4, 5]
let [a, b] = arr
console.log(`first element: ${a}, second element: ${b}`)


console.log("use object destructuring to extract the title and author from a book object an dlog them to the console.")
let book = {
    name : "Vidhur Niti",
    author: "Vidhur",
    year: "5000 BC"
}
let {name, author, year} = book
console.log(`name: ${name}, author: ${author}, year: ${year}`)


console.log("use the spread operator to create a new array that includes all elements of the existing array and plus additional elements,")
let arr1 = [10, 20, 30]
let arr2 = [40, 50, 60]
let spreadedArr = [...arr1, ...arr2, 70, 80, 90, 100]
console.log(spreadedArr)


console.log("use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.")
function sum(a, b, ...rest){
    let sum = a + b 
    for(let i = 0; i < rest.length; i++){
        sum += rest[i]
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


console.log("write a function that takes two parameter and returns their product, with the second parameter having default value of 1. log the result of calling this functionn with and without the second parameter.")
function product(a, b=1){
    return a * b
}
let result = product(5)
let result2 = product(5, 5)
console.log(result, result2)


console.log("use enhanced object literals to create an object with methods and properties, and log the object to the console.")
let person = {
    firstName: 'John',
    age: 22,
    fullname(){
        return `Hello, My name is ${this.firstName} ${this.age}`
    },
    incrementAge(){
       return this.age += 1
    }
};
console.log(person);
console.log(person.fullname())
console.log(person.incrementAge())


console.log("create an object with computed property names based on variables and log the object to the console")
const property1 = "firstName";
const property2 = "secondName";
const personalDetails = {
    [property1] : "Nidhi",
    [property2] : "Jain",
    occupation : 'Software Developer'
}
console.log(personalDetails)