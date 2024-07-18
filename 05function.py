print("write a function to check a number is even or odd")
def checkEvenOdd(num):
    if(num % 2 == 0):
        print("even")
    else:
        print("odd")

checkEvenOdd(7)


print("write a function to calculate squre of a number")
def squre(a):
    return a*a

number = 4
result = squre(number)
print(result)


print("write a function to find max-value of two num's.")
def whichIsMax(a, b):
    if(a > b):
        print("a is greater than b")
    else:
        print("b is greater than a")

a = 10
b = 20
whichIsMax(a, b)


print("write a function to concatinate two strings")
def concat(a, b):
    return a + " " + b

c = "Hello"
d = "World !"
concatinate = concat(c, d)
print(concatinate)

print ("write a function to calculate product of two number and second number will be default")
def pro(a, b=5):
    return a*b
product = pro(10)
print(product)


print("take person name and age as a default and greet him ")
def person(name, age=21):
    greetings = f"Hello {name}, Welcome to {age}'s group"
    return greetings

naam = "Kalmesh"
age = 22
greeting_to_person = person(naam, age)
print(greeting_to_person)

