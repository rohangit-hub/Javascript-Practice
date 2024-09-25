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
  