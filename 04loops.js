console.log("write a program to loop 1 to 10 using for loop")
for (let i = 1; i <= 3; i++) {
    const element = i
    console.log(element)
}


console.log("write a program to loop 1 to 10 using for loop and print table of 5")
for (let table = 1; table <= 5; table++) {
    const element = table * 5;
    console.log(element)
    
}


console.log("write a program to calculate sum of 1 to 10 using while loop")
let sum = 0
let j = 1
while (j <= 10) {
    sum = sum + j
    j++
}
console.log(`sum of 1 to 10 using while loop: ${sum}`)


console.log("write a program to print number from 10 to 1 using while loop");
let k = 10
while (k >= 6) {
    console.log(k)
    k--
}


console.log("write a program to print number from 1 to 5 using 'do while loop'")
let l = 1
do {
    console.log(l)
    l++
} while (l <= 5)


console.log("write a program to calaculate factorials of a number using 'do while loop'")
let m = 5
let fact = 1
do {
    fact = fact * m
    m--
} while (m >= 1)
console.log(fact)


console.log("write a program to print a pattern using 'nested for loops'")
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j)
    }
}


console.log("write a program to print number from 1 to 10 but skip number 5 using 'continue' statement")
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(i)
}


console.log("write a program to print number from 1 to 10 but stop the loop when number 5 is reached using 'break' statement")
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break
    }
    console.log(i)
}