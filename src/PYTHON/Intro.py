
#! Basic
# first_Name = "Tony"
# last_Name = "Stark"
# age = 22
# height = 1.85

# print(first_Name,last_Name,type(first_Name))
# print("Age",age,type(age))
# print("Height",height,type(height))


#! Taking two value and add
# num1 = input("Enter a value : ")
# num2 = input("Enter b value : ")
# print(int(num1)+int(num2))

#* Type conversion and Type casting
# Type Casting hu krte hai like this int(val),float(num)
# Type conversion : Python khud data type convert karta hai. 
# a = "10"
# b = 5
# print(a+b) #! output : "105"


#! Convert to float
# num = 99
# print(float(num))


#! Convert to integer
# num = "99"
# print(int(num))


#! in / not in 
# names = ["Tushar", "Rahul", "Aman"]

#* in      → andar hai?
#* not in  → andar nahi hai?

# print("Tushar" in names) #Boolean TRUE/FALSE
# print("Tushar" not in names)


#! is, is not
# a = [1, 2, 3]
# b = [1, 2, 3]

# print(a == b)  # True

#* is

# a = [1, 2, 3]
# b = [1, 2, 3]

# print(a is b)   # False

# a = [1, 2, 3]
# b = a

# print(a is b)   # True

#* is not

# a = [1, 2, 3]
# b = [1, 2, 3]

# print(a is not b)   # True

# a = [1, 2, 3]
# b = a

# print(a is not b)   # False


#! Conditions

# a=2; b=10

# if a>b : print(a,"is Grater then",b)
# elif a<b : print(a,"is Smaller then",b)
# else : print("Hello world")


#! Loops

#* range() // range(stop)
# for i in range(5): 
#     print(i)

#* Output
# 0
# 1
# 2
# 3 
# 4

#* range(start, stop)
# for i in range(1,6) : print(i)

#* Output
# 1
# 2
# 3 
# 4
# 5

#* range(start, stop, step)
# for i in range(1,10,2) : print(i)

#* Output
# 1
# 3
# 5
# 7
# 9

#* Reverse Loop
# for i in range(5,0,-1) : print(i)

#* Output
# 5
# 4
# 3
# 2
# 1


#! Array Loop

# fruits = ["Apple", "Mango", "Banana"]
# for i in fruits : print(i)

#* Break

# for i in range(0,10) : 
#     if i==5 : break
#     print(i)

#* Continue

# for i in range(0,10) : 
#     if i==5 : continue
#     print(i) 


#! String

# name = "Tushar"
# for i in name : print(i)
# #* Output
# T
# u
# s
# h
# a
# r
#! --
# T  u  s  h  a  r
# 0  1  2  3  4  5


# name = "Tushar"
# print(name[0]) # T

#! Slicing

# string[start : stop]

# name = "Tushar"

# print(name[0:3]) # Tus

# print(name[:3])  # Tus

# print(name[2:])  # shar

# print(name[:])   # Tushar

#! string[start:stop:step]

# name = "Tushar"
# print(name[0:6:2])  # Tsa

# word = "abcdef"
# print(word[0:6:2])  # ace

#* Reverse 

name = "Tushar"
print(name[::-1])  # rahsuT 