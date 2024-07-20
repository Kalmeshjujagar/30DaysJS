console.log("create an array of 1 to 5 number and log")
let arr = [1, 2, 3, 4, 5]
console.log(arr)

console.log("access the first and last element of the array and log")
let acc = arr[0 && 4]
console.log(`first element: ${arr[0]}, last element: ${arr[arr.length - 1]}`)


console.log("use the 'push' method to add an element at the end of the array")
let pArr = [1, 2, 3, 4, 5]
console.log(`this is pArr before editing: ${pArr}`)
pArr.push(6)
console.log(`adding number last of the pArr: ${pArr}`)
pArr.pop()
console.log(`removing the last element of the pArr: ${pArr}`)
pArr.shift()
console.log(`removing the first element of the pArr: ${pArr}`)
pArr.unshift(1)
console.log(`adding the number to first place of the pArr: ${pArr}`)


console.log("use the 'map' method to create a new array where each number is doubled and log")
let mArr = [1, 2, 3, 4, 5]
let mapArr = mArr.map(x => x * 2)
console.log(`Array after using map: ${mapArr}`)


console.log("use the 'filter' method to create a new array with only even numbers and log")
let fArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterArr = fArr.filter(x => x % 2 == 0)
console.log(`Array after using filter: ${filterArr}`)


console.log("use the 'reduce' method to sum all the numbers in the array and log")
let rArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let reduceArr = rArr.reduce((a, b) => a + b)
console.log(`rArr array after using 'reduce' method: ${reduceArr}`)


console.log("use the 'sort' method to sort the array in ascending order and log")
let sArr = [5, 4, 3, 2, 1]
let sortArr = sArr.sort()
console.log(`sArr array after using 'sort' method: ${sortArr}`)


console.log("use the 'reverse' method to reverse the array and log")
let reArr = [1, 2, 3, 4, 5]
let reverseArr = reArr.reverse()
console.log(`reArr array after using 'reverse' method: ${reverseArr}`)



console.log("use a 'for' loop to iterate over the array and log each element to the console")
let forArr = [1, 2, 3, 4, 5]
for (let i = 0; i < forArr.length; i++) {
    const element = forArr[i];
    console.log(`This is forArr: ${element}`)
}

console.log("use a 'forEach' loop to iterate over the array and log each element to the conosle")
let forEachArr = [1, 2, 3, 4, 5]
forEachArr.forEach(element => {
    console.log(`This is forEachArr: ${element}`)
})


console.log("create a two dimensional array (matrix) and log")
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix)
console.log(matrix[1][2])