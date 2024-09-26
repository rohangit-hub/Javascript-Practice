/*
JavaScript supports different kinds of loops:
================================================================
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/

// FOR LOOP //
for (let i = 5; i >= 0 ; i--) {
    console.log(`For loop ${i} itration ==> ${i}`)
  }
console.log('\n')

// FOR IN ==> KEY //
// The JavaScript for in statement loops through the properties of an Object.

const obj1 = {
  firstName: "rohan",
  lastName: "tiwari",
  age: 24,
  dist: "ballia",
  fulladd : function (){return this.firstName + " " + this.lastName +" "+ this.age+" "+this.dist}
}
const arr1 = [1,2,3,"a","b","c",true]

// Object key
for(x in obj1){
  if(x == "fulladd"){
    console.log(`person ${x} is ${obj1.fulladd()}`)
  }
  else{console.log(`person ${x} is ${obj1[x]}`)}
  
}
console.log('\n')
// Array index
for(x in arr1){
  console.log(`person ${x} is ${arr1[x]}`)
}
console.log('\n')
/*
The For Of Loop
===================
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
*/

for(x of arr1){
  console.log(`Array val ${x}`)
}
console.log('\n')

// WHILE LOOP //
let i = 0;
while (i < 10) {
  console.log(`Number at ${i} is ${i}`)
  i++;
}

