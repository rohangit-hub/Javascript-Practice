/*
Object
The Object type represents one of JavaScript's data types. It is used to store various keyed 
collections and more complex entities.

Methods for Defining JavaScript Objects --> 
1- Using an Object Literal
2- Using the new Keyword
3- Using an Object Constructor
4- Using Object.assign()
5- Using Object.create()
6- Using Object.fromEntries()
*/

// Using an Object Literal:-> An object literal is a list of property names:values inside curly braces {}.
const objectLiteral = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
  };
  console.log(`Object literals1 --> ${objectLiteral.firstName}`);
  
  // Create an Object
  const person = {};
  // Add Properties
  person.firstName = 'John';
  person.lastName = 'Doe';
  person.age = 50;
  person.eyeColor = 'blue';
  console.log(`Object literals2 --> ${person.eyeColor}`);
  console.log(`\n`);
  
  // OBJECT with NEW keyword
  
  // Create an Object
  const person1 = {};
  // Add Properties
  person1.firstName = 'John';
  person1.lastName = 'Doe';
  person1.age = 50;
  person1.eyeColor = 'blue';
  console.log(`Create Object with NEW keyword -> ${person1.firstName}`);
  console.log(`\n`);
  
  //Object Constructor Functions
  function Person3(first, last, age, eye, relation) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.relation = relation;
    this.nationality = 'INDIA'; // you can use default value also
  }
  const mySis = new Person3('John', 'Doe', 50, 'blue', 'sister');
  console.log(`Create Object with Constructor Functions -> ${mySis.relation}`);
  console.log(`Create Object with Constructor Functions -> ${mySis.nationality}`);
  console.log(`\n`);
  
  /*
  Object methods are actions that can be performed on objects.
  A method is a function definition stored as a property value.
  
  */
  const person5 = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
  };
  console.log(`Object Methods -> ${person5.fullName()}`);
  console.log(
    `Object Methods without "()" return the object definition -> \n ${person5.fullName}`
  );
  console.log(`\n`);
  
console.log(`Object keys --> ${Object.keys(person1)}`)
console.log(`Object Values --> ${Object.values(person1)}`)
console.log(`Object entries --> ${Object.entries(person1)}`)

//Object.assign() is used to copy values from one object to another.
const assignObject = Object.assign(person1)
console.log(assignObject )


//Spread Operator
// Initialize an object
const name1 = {
  firstName: 'Philip',
  lastName: 'Fry'
};

// Initialize another object
const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express'
};

// Merge the object with the spread operator
const character = {...name1, ...details}
console.log(character);

/* Object.freeze() prevents modification to properties and values of an 
object, and prevents properties from being added or removed from an object. */

// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};
// Freeze the object
const newUser = Object.freeze(user);
newUser.password = '*******';
newUser.active = true;
console.log(newUser);

/*
Object.seal() prevents new properties from being added to an object, 
but allows the modification of existing properties. This method is similar to Object.freeze(). 
Refresh your console before implementing the code below to avoid an error. */

const user1 = {
	username: 'AzureDiamond',
	password: 'hunter2'
};
// Seal the object
const newUser1 = Object.seal(user1);

newUser1.password = '*******';
newUser1.active = true;
console.log(newUser1);

// Using JSON.stringify() //
// JavaScript objects can be converted to a string with JSON method JSON.stringify().

// Create an Object
const person22 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let myString = JSON.stringify(person22);
console.log(`Object to String by stringify() --> ${myString}`)