#  if else statement 
#  write a program to check if a number is positive, negative, or zero and log a result into console

a = 10;
if(a > 0):
    print("positive")
elif(a == 0):
    print("zero");
else:
    print("negative")

# eligible for vote
a = 20
if(a >= 19):
    print("eligible for vote")
else:
    print ("not eligible for vote")


# write a program to find the largest of thee numbers using nested if-else statement

a = 10
b = 20
c = 30

if (a > b):
    if(a > c):
        print("a")
    else:
        print("c")
elif(b > c):
    print("b")
else:
    print("c")

# check that given year is leaf year or not 
isLeaf = 2020

if(isLeaf % 4 == 0):
    print("yes it is a leaf year")
else:
    print("no it is not a leaf year")