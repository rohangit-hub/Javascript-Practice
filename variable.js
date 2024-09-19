/*
Link --> https://www.w3schools.com/jsref/default.asp
This tutorial covers every version of JavaScript:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The Original JavaScript ES1 ES2 ES3 (1997-1999)
The First Main Revision ES5 (2009)
The Second Revision ES6 (2015)
The Yearly Additions (2016, 2017 ... 2021, 2022)


When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

6. Variables declared with let have Block Scope

7. Variables declared with the var always have Global Scope.

------------------------------------------------------------------------------------

let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

*/

let variable1 = 'rohan';
var variable2 = 24;
const variable3 = ['rohan', 24];

console.log(
  `variable1 = ${variable1}, variable2 = ${variable2} and variable3 = [${variable3}]`
);

/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

*/


