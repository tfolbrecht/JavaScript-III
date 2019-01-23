/* The four principles of "this";
* in your own words. explain the four principled for the "this" keyword below.
*
* 1. Global
* * Global refers to the global object, in browsers, this is the window object
* 2. Implicit
* * When an object is called by a proceeding dot
* 3. New
* * New refers to the created constructor object instance created and returned by the constructor function `const a new someFunc('Newobj');`
* 4. Explicit
* * using .call, .apply methods .call  for argument list .apply for single array of args
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this === window);  // should return true :thinking:

// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
myObj.sayHello('Ryan');
  // lifted straight from learn page^

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman'); // new binding!
  const newman = new CordialPerson('Jerry'); // new binding!
  
  jerry.speak();
  newman.speak();
// the functions arguement is being returned by the called function with `this`

// Principle 4
// code example for Explicit Binding
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"