# Syntax and Variables in JavaScript 
A variable can be considered as a box that can hold a single value and keep track of information in an application. <br>
```
var x = 5; // x is a variable declared with **var** keyword and it stores the value 5. 
let y = 2; // y is a variable declared with **let** keyword and it stores the value 2. 
```
--> Before moving any further, there are a few key terms associated with variables that you must understand. These are:
### 1. Variable Declaration
Creating a variable in JavaScript is called **Declaring** a variable. Declaration tells the compiler about the existence of an entity in the program and its location. 
```
var name;
// or
var name = 'Qurat';
```
When you declare a variable, you should also initialize it.<br> 
**Note: In JavaScript, after declaration, if the variable has no value it is technically called undefined.**
### 2. Variable Initialization
Initializing a variable means specifying an initial value to assign to it, before it is used at all. Initializing a variable is only done exactly once, when the computer loads your program into memory for execution i.e all initializations are done before the program starts its execution.
```
var name='Qurat';
let lastname='Shoro';
```
## Different Ways to Create Variables in JavaScript 
### 1. Using the keyword _var_
--> The _**var**_ keyword is used to create normal variables and it is used in all JavaScript code from 1995-2015. If you want your code to run in older browsers, you must use _**var**_.
#### Example:
```
var num1 = 10;
var num2 = 6;
var sum = num1 + num2;
```
### 2. Using the keywords _let_ and _const_ 
The _**let**_ and _**const**_ keywords were added to JavaScript in 2015 i.e in ES6. Using _**let**_ you can create block level elements and _**const**_ is used to create constant variables.
#### Example:
```
let num1 = 10;
const num2 = 6;
let a = 2, b=3, c=4; // multiple declarations in one line of code
```
#### Where to use let and const?
If you think value of variable can change, use _**let**_ but when you want to declare fixed value variables use _**const**_.
```
const pi= 3.14;
let carSpeed = 6;
``` 
**Note: You can not re-declare a variable that is declared with _let_ and _const_ keywords.**
### 3. Without using any keyword
In JavaScript variables can also be declared without using any keyword.
#### Example:
```
x = 10;
y = 6;
z = x + y;
```
## Rules for Variable Names
We need to consider valid names for variables in JavaScript.
- Cannot start with a digit or solely consist of digits.
- Cannot be a JavaScript reserved keyword such as (let,const,var,for,if etc).
- Cannot contain punctuation or special characters besides _ and $.
