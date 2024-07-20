console.log("create an object with book with title, author and year and log")
let book = {
    title : "Ramayan",
    author : "Valmiki",
    year : "1.8 million BC",
    thisMethod : function(){
       return `Title: ${this.title}, Year: ${this.year}`
    }
}
console.log(book)
console.log(`title: ${book.title}, author: ${book.author}`)


console.log("add a methon to the book object that return a string with the book's title and auther, andd log the result of calling this method")
book.get = function(){
    return `title: ${book.title}, author: ${book.author}`
}
console.log(book.get())


console.log("add a method to the book object that takes a parameter (year) and updates the book's property, then log the updated object.")
function updateYear(book, newYear){
    return book.year = newYear
}
let updated = updateYear(book, "1.9 million BC")
console.log(updated)
console.log(book)


console.log("create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.")
let library = {
    name : "Nalanda library",
    books : [
        {
            title : "Ramayan",
            author : "Valmiki",
            year : "1.8 million BC",
        },
        {
            title : "Mahabharata",
            author : "VedVyas",
            year : "5000 years BC"
        }
    ],
}
console.log(library)

function titles(library){
    for(let i = 0; i < library.books.length; i++){
        console.log(library.books[i].title)
    }
    console.log(library.name)

}
titles(library)


console.log("use 'this' and create a method in the book object that returns a string with the book's title and year, and log the result of calling this method")
let book1 = book.thisMethod()
console.log(book1)


console.log("use a 'for...in' loop to iterate over the properties of the book object and log each property and its value")
let book2 = {
    title: "Chanaky Niti",
    author: "Chanakya"
}
for (let prop in book2){
    console.log(prop,":", book2[prop])
}

console.log("use 'object.keys' and 'object.values' methods to log all the kes and values of the book object")
console.log(Object.keys(book2), Object.values(book2))


