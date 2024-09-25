/* Numeric literals with absolute values equal to 2^53 or greater are too large to be represented 
accurately as integers

for above we use bigint use n at the end of the integer to make that bigint
*/

const int1 = 25436754361831523752836528564586527943;
const bigint1 = 2543675436183152375283652856458372645954n;
console.log(`integer --> ${int1}`);
console.log(`Bigint --> ${bigint1}`);

/* 
NaN == NOT A NUMBER 
NaN is a number: typeof NaN returns number:

Infinity (or -Infinity) is the value JavaScript will return if you calculate a 
number outside the largest possible number.
Infinity is a number: typeof Infinity returns number.
*/

/*
Method -->	Description
toString() -->	Returns a number as a string.
toExponential() -->	Returns a number written in exponential notation.
toFixed() -->	Returns a number written with a number of decimals.
toPrecision() -->	Returns a number written with a specified length.
valueOf() -->	Returns a number as a number.
*/

/*
Property -->	Description
EPSILON -->	The difference between 1 and the smallest number > 1.
MAX_VALUE -->	The largest number possible in JavaScript.
MIN_VALUE -->	The smallest number possible in JavaScript.
MAX_SAFE_INTEGER -->	The maximum safe integer (253 - 1).
MIN_SAFE_INTEGER -->	The minimum safe integer -(253 - 1).
POSITIVE_INFINITY -->	Infinity (returned on overflow).
NEGATIVE_INFINITY -->	Negative infinity (returned on overflow).
NaN -->	A "Not-a-Number" value.
*/
//.............................................................................

// DATES //

/*

new Date()
new Date(date string)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)

The getMilliseconds() method returns the current milliseconds (from 0 to 999). 
You can store the result in a variable like milliseconds.
*/

/*
Method -->	Description
getFullYear() -->	Get year as a four digit number (yyyy)
getMonth() -->	Get month as a number (0-11)
getDate() -->	Get day as a number (1-31)
getDay() -->	Get weekday as a number (0-6)
getHours() -->	Get hour (0-23)
getMinutes() -->	Get minute (0-59)
getSeconds() -->	Get second (0-59)
getMilliseconds() -->	Get millisecond (0-999)
getTime() -->	Get time (milliseconds since January 1, 1970)
...................................................................

Method -->	Description
setDate() -->	Set the day as a number (1-31)
setFullYear() -->	Set the year (optionally month and day)
setHours() -->	Set the hour (0-23)
setMill -->iseconds() -->	Set the milliseconds (0-999)
setMinutes() -->	Set the minutes (0-59)
setMonth() -->	Set the month (0-11)
setSeconds() -->	Set the seconds (0-59)
setTime() -->	Set the time (milliseconds since January 1, 1970)


const d = new Date();
d.setFullYear(2020);
*/

const d1 = new Date();
const d2 = new Date(2018, 11, 24, 10, 33, 30);
console.log('\n');
console.log(`Current date --> ${d1}`);
console.log(`Set date --> ${d2}`);
console.log(`Year --> ${d1.getFullYear()}`);
console.log(`Month --> ${d1.getMonth()}`);
console.log(`Date --> ${d1.getDate()}`);
console.log(`Hour --> ${d1.getHours()}`);
console.log(`Minut --> ${d1.getMinutes()}`);
console.log(`Second --> ${d1.getSeconds()}`);
console.log(`MilliSecond --> ${d1.getMilliseconds()}`);

/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

Math.round(x)	  // Returns x rounded to its nearest integer
Math.ceil(x)	  // Returns x rounded up to its nearest integer
Math.floor(x)	  // Returns x rounded down to its nearest integer
Math.trunc(x)	  // Returns the integer part of x (new in ES6)

Math.pow(a,b)  // powe of a^b
Math.sqrt(x) returns the square root of x:
Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);

*/

// RANDOM --> Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
//Math.random() used with Math.floor() can be used to return random integers.

const random2 = Math.floor(Math.random() * 10);
console.log('\n');
console.log(`Random number from 0 - 9 is --> ${random1}`);
