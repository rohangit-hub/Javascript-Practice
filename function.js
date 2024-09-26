// NAMED FUNCTION //
function namedFun (a,b) {
    return a+b;
}
console.log(`Named Function Return --> ${namedFun(2,3)} \n`)


// ANONYMOUS FUNCTION //
const anonFun = function(a,b) {
    return a+b;
}
console.log(`Anonymous Function Return --> ${anonFun(2,3)} \n`)


// ARROW FUNCTION //
const arrowFun = (a,b) => {
    return a+b;
}
console.log(`Arrow Function Return --> ${arrowFun(2,3)} \n`)


// IMMEDIATELY INVOKED FUNCTION = (IIFE) // 
// (you can define any type of function here )()
;(()=>{
    console.log(`IIFE Function executed !..\n`)
})()


// HIGHER ORDER FUNCTION //
// A function which take function as arguments. ex. MAP(), FILTER(), REDUCE() is a kind of HOF.
// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function: ');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function: ')
    func()
}

higherOrderFunction(callbackFunction);


// CALLBACK FUNCTION //
function myDisplayer(some) {
    console.log(`\nCallback function sum of 2, 3-> ${some}`)
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(2,3);




