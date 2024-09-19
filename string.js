/*
IMP NOTE -> Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String Method --> 
----------------------------
String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split() --> Array convert.

See Also: --> String Search Methods
----------------------------------------
String indexOf() --> return the index of the string first encounter
String lastIndexOf() --> return the index of the string last encounter
String search() --> return index
String match() --> return the itrater always use (/serchString/gi)
String matchAll()
String includes() --> return true if matrch
String startsWith() --> return true if matrch
String endsWith() --> return true if matrch
*/

let str1 = 'Hello! Rohan, I am cognizant, from Noida';
let str2 = ' UP 201304 ';
let str3 = ' Abhishek ki job lag gyi ';

console.log(`String -> ${str1}\n`);

console.log(`length of string -> ${str1.length}\n`);

console.log(`Charecter at the index of string -> ${str1.charAt(0)}\n`);

console.log(
  `ASCII value of charecter at the index of string -> ${str1.charCodeAt(0)}\n`
);

console.log(`Charecter at the index of string -> ${str1.at(0)}\n`);

console.log(`Charecter at the index of string -> ${str1[0]}\n`);

/*
There are 3 methods for extracting a part of a string:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
slice(start, end)
substring(start, end)
substr(start, length)

*/
console.log(`Substring of string by slice() -> ${str1.slice(7, 25)}\n`);
console.log(`Substring of string by substring() -> ${str1.substring(7, 25)}\n`);
console.log(`Substring of string by substr() -> ${str1.substr(7, 25)}\n`);

console.log(`Convert into lower case -> ${str1.toLocaleLowerCase()}\n`);
console.log(`Convert into lower case -> ${str1.toLowerCase()}\n`);
console.log(`Convert into upper case -> ${str1.toLocaleUpperCase()}\n`);
console.log(`Convert into upper case -> ${str1.toUpperCase()}\n`);

console.log(`Concat string 1 and string 2 -> ${str1.concat(str2)}\n`);
console.log(
  `Concat string 1 and string 2 and string 3 -> ${str1.concat(str2, str3)}\n`
);

console.log(`String Before Trim -> ${str2}\n`);
console.log(`String After Trim -> ${str2.trim()}\n`);
console.log(`String Before Trim Start and Trim End -> ${str3}\n`);
console.log(`String After Trim Start-> ${str3.trimStart()}\n`);
console.log(`String After Trim End -> ${str3.trimEnd()}\n`);

/*
The padStart() method pads a string from the start.
The padEnd() method pads a string from the start.
*/
let text1 = '5';
console.log(`Padding(Add) String at the start -> ${text1.padStart(4, '0')}\n`);

let text2 = '5';
console.log(`Padding(Add) String at the end -> ${text2.padEnd(4, 'x')}\n`);

/*
The repeat() method returns a string with a number of copies of a string.
The repeat() method returns a new string.
The repeat() method does not change the original string.
*/
console.log(`Repeat the string -> ${str2.repeat(3)}\n`);

/*
The replace() method replaces only the first match
To replace all matches, use a regular expression with a /g flag (global match):
To replace case insensitive, use a regular expression with an /i flag (insensitive):

The replaceAll() method allows you to specify a regular expression instead of a string to be replaced

*/
let text = 'Please visit, and MICROSOFT| you, can VISIT |Microsoft at noida';

let newText1 = text.replace('Microsoft', 'W3Schools');
let newText2 = text.replace(/MICROSOFT/i, 'W3Schools');
let newText3 = text.replace(/Microsoft/g, 'W3Schools');
let newText4 = text.replace(/Microsoft/gi, 'W3Schools');
let newText5 = text.replaceAll('Microsoft', 'W3Schools');
let newText6 = text.replaceAll(/Microsoft/gi, 'W3Schools');

console.log(
  `Replace() the string only first match / Case Sensitive --> ${newText1}`
);
console.log(
  `Replace() the string only first match / Case Insensitive  --> ${newText2}`
);
console.log(
  `Replace() the string global match / Case Sensitive  --> ${newText3}`
);
console.log(
  `Replace() the string global match / Case Insensitive  --> ${newText4}`
);
console.log(`ReplaceAll() the string match / Case Sensitive  --> ${newText5}`);
console.log(
  `ReplaceAll() the string match / Case Insensitive  --> ${newText6}\n`
);

/*
A string can be converted to an array with the split() method:
*/
console.log(`split all the char of a string --> ${text.split('')}`); // split all the charecter of string
console.log(`split a string on the bassis of comma --> ${text.split(',')}`); // Split on commas
console.log(`split a string on the bassis of space --> ${text.split(' ')}`); // Split on spaces
console.log(
  `split a string on the bassis of pipe (|) --> ${text.split('|')}\n`
); // Split on pipe

/*
let str1 = 'Hello! Rohan, I am cognizant, from Noida';

The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
Both indexOf(), and lastIndexOf() return -1 if the text is not found:
Both methods accept a second parameter as the starting position for the search:
*/
console.log(
  `indexOf() serch the index of given string FIRST encounter --> ${str1.indexOf(
    'rohan'
  )}`
);

console.log(
  `lastIndexOf() serch the index of given string LAST encounter --> ${str1.lastIndexOf(
    'rohan'
  )}`
);

console.log(
  `indexOf() serch the index of given string FIRST encounter but start from the given 2nd parameter --> ${str1.indexOf(
    'rohan',
    20
  )}`
);

/*
The search() method searches a string for a string (or a regular expression) and 
returns the position of the match:

The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).

*/
console.log(
  `search() serch the index of given string FIRST encounter --> ${str1.search(
    'rohan'
  )}`
);

/*
The match() method returns an array containing the results of matching a string against a string (or a regular expression).

It return the array of the matching string
 */

let strtext = 'The rain in SPAIN stays mainly in the plain';
const myArr1 = strtext.match('ain');
const myArr2 = strtext.match(/ain/gi);
console.log(`searched string form the sentence --> ${myArr1}`);
console.log(
  `searched string global, case-insensitive search for "ain": --> ${myArr2}`
);

/**
 The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
 
 */
let matchtext =
  'I love cats. Cats are very easy to love. Cats are very popular.';
let iterator1 = matchtext.matchAll('Cats');
console.log(`matched string form the sentence --> ${iterator1}`);

/**
The includes() method returns true if a string contains a specified value Otherwise it returns false.
The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false:
The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
 */
console.log(
  `Includes() return true if the string is present into the string and case sensitive--> ${str1.includes(
    'Rohan'
  )}`
);

console.log(
  `startsWith() return true if the string start with given string and case sensitive --> ${str1.startsWith(
    'Rohan'
  )}`
);

console.log(
  `EndsWith() return true if the string ends with given string and case sensitive --> ${str1.endsWith(
    'Noida'
  )}`
);

/*
const str1 = 'rohan from ballia from UP from';

console.log(str1.split(""));
console.log(str1.indexOf('from')); --> 6
console.log(str1.lastIndexOf('from')); --> 26
console.log(str1.search('from')); --> 6
console.log(str1.includes('from')); --> true
console.log(str1.match(/from/gi)); --> ['from','from','from']

*/
