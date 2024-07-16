// if else statement 
// write a program to check if a number is positive, negative, or zero and log a result into console

let num = 10

if (num > 0){
    console.log("positive")
}else if (num == 0){
    console.log("zero");
}else console.log("negative")

// eligibla for vote or not 
let person = 20

if(person >= 18){
    console.log("eligible for vote")    
}else{
    console.log("not eligible for vote")
}

// write a program to find the largest of thee numbers using nested if-else statement
a = 100
b = 20
c = 30

if(a > b){
    if(a>c){
        console.log(a)
    }else{
        console.log(c)
    }
}else if(b > c){
    console.log(b)
}else{
    console.log(c)
}


// Switch case write a program to determine day of the week based number (1 to 7)
let day = 5

switch(day){
    case 1:
        console.log("mon")
        break;
    case 2:
        console.log("tus")
        break;
    case 3:
        console.log("wen")
        break;
    case 4:
        console.log("thus")
        break;
    case 5:
        console.log("fri")
        break;
    case 6:
        console.log("sat")
        break;
    case 7:
        console.log("sun")
        break;
    default:
        console.log("enter valid number")
}

// write a program that uses a switch case to assign a grade (a, b, c, d, e, f) based on there scores
let score = 85

switch(true){
    case (score > 90):
        console.log("grade : A")
        break;
    case (score > 80):
        console.log(`for the score of ${score}, the grade is : B`)
        break;
    case (score > 70):
        console.log("grade : C")
        break;
    case (score > 60):
        console.log("grade : D")
        break;
    case (score > 50):
        console.log("grade : E")
        break;
}

// conditional ternary operator to check the given number is even or odd

let evod = 18

if( evod % 2 == 0){
    console.log("even")
}else{
    console.log("odd")
}


// check the given year is leap year or not
let isLeaf = 2020

if(isLeaf % 4 == 0){
    console.log(`Yes ${isLeaf} is Leaf year`)

}else{
    console.log(`No ${isLeaf} is not Leaf year`)
}