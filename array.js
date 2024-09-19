/** 
  ARRAY ==> An array is a special variable, which can hold more than one value: 
  Arrays are Objects
  Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
  But, JavaScript arrays are best described as arrays.

**/

const cars1 = ['Saab', 'Volvo', 'BMW'];

const cars2 = [];
cars2[0] = 'Saab';
cars2[1] = 'Volvo';
cars2[2] = 'BMW';

const cars3 = new Array('Saab', 'Volvo', 'BMW');

console.log(`Array1 --> ${cars1}`);
console.log(`Array2 create as an object --> ${cars2}`);
console.log(`Array3 create with new keyword --> ${cars3}\n`);

/**
 
Basic Array Methods
******************************
Array length
Array at() or array[] --> access index of array
Array join() --> convert into string
Array toString() --> convert into string
Array pop() --> remove the last element
Array push() --> add the element at the last --> append
Array shift() --> remove the first element
Array unshift() --> add the element at the first
Array delete() 
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()

Array Find and Search Methods
**************************************
Array indexOf()
Array lastIndexOf()
Array includes()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()

Alpabetic Sort
************************
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects	

Numeric Sort
***********************
Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()

Array Iteration Methods -> Array iteration methods operate on every array item:
*************************************************************************************
Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)

 */

const array1 = [1, 2, 3, 4, 5, 6, 7, 3, 2];
const array2 = ['a', 'b', 'c', 'd', 'b', 'a'];
const array3 = [1, 2, 3, ['a', ['b', 'c']], true];

console.log(`Array length --> ${array1.length}`);

//const cars1 = ['Saab', 'Volvo', 'BMW'];
const str1 = cars1.toLocaleString();
console.log(`Char at 3rd position in string --> ${str1[3]}\n`);

//ARRAY TO STRING by JOIN(), TOSTRING() and TOLOCALSTRING()
console.log(
  `Convert array into string by Join() without space --> ${array1.join('')}`
);
console.log(
  `Convert array into string by Join() with space --> ${array1.join(' ')}`
);
console.log(
  `Convert array into string by Join() with any charecter --> ${array1.join(
    '*'
  )}`
);

console.log(`Convert array into string by toString() --> ${cars1.toString()}`);

console.log(
  `Convert array into string by toLocalString() --> ${cars1.toLocaleString()}\n`
);

/*
 The pop() method removes the last element from an array:
 The pop() method returns the value that was "popped out":

 The push() method adds a new element to an array (at the end):
 The push() method returns the new array length:

 The shift() method removes the first array element and "shifts" all other elements to a lower index.
 The shift() method returns the value that was "shifted out":

 The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
 The unshift() method returns the new array length:

 Changing Elements -> Array elements are accessed using their index number:
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits[0] = "Kiwi"; --> replace with the kiwi value at the 0th index
 fruits[fruits.length] = "Kiwi"; ---> append

 */

console.log(
  `pop() remove the last element of array and return that element--> ${array1.pop()}`
);

console.log(
  `shift() remove the first element of array and return that element--> ${array2.shift()}`
);

console.log(
  `push() add the element at last of array and returns the new array length--> ${array1.push(
    'o'
  )}`
);

console.log(
  `unshift() add the element at first of array and returns the new array length--> ${array2.unshift(
    true
  )}\n`
);

/*
  The concat() method creates a new array by merging (concatenating) existing arrays but donot change the original array:

*/

const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const arr3 = ['Robin', 'Morgan'];
const myChildren = arr1.concat(arr2, arr3);
console.log(`concat the 3 arrays --> ${myChildren}`);

const arr4 = ['Emil', 'Tobias', 'Linus'];
const myChildren2 = arr4.concat('Peter');
console.log(`concat the 3 arrays --> ${myChildren2}\n`);

/*
The copyWithin() method copies array elements to another position in an array.

Copy to index 2, all elements from index 0:
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.copyWithin(2, 0);

Copy to index 2, the elements from index 0 to 2:
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
  fruits.copyWithin(2, 0, 2);

The copyWithin() method overwrites the existing values.

The copyWithin() method does not add items to the array.

The copyWithin() method does not change the length of the array.
*/

const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits2.copyWithin(2, 0);
console.log(`copywithin() --> ${fruits2}`);

const fruits3 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];
fruits3.copyWithin(2, 0, 2);
console.log(`copywithin() --> ${fruits3}\n`);

/*
 * The flat() method creates a new array with sub-array elements concatenated to a specified depth.
 */
console.log(
  `flat() the array with the depth specified --> ${array3.flat(3)}\n`
);

/*
The splice() method adds new items to an array.
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:

toSplice() Vs splice()
The difference between the new toSpliced() method and the old splice() method is that the new method 
creates a new array, keeping the original array unchanged, while the old method altered the original array.
*/
const fruits5 = ['Banana', 'Orange', 'Apple', 'Mango'];
const fruits6 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits5.splice(2, 0, 'Lemon', 'Kiwi');
fruits6.splice(2, 2, 'Lemon', 'Kiwi');
console.log(`splice() without any element delete --> ${fruits5}`);
console.log(`splice() with element delete --> ${fruits6}\n`);

/*
The slice() method slices out a piece of an array.
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.

*/
const fal = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fal.slice(1, 3);
console.log(`slice of array --> ${citrus}\n`);
