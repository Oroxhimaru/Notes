const user = {
    username: "hassan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username);
console.log(user.getUserDetails());
 console.log(this);


/* Definition: Objects are containers for properties and methods. */
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    start: function() {
      console.log("Engine started!");
    }
  };

  /* In this example, car is an object with properties (make, model, year) and a method (start). */

  /*2. Constructors:
Definition: Constructors are functions used to create and initialize objects. */

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
      console.log("Engine started!");
    };
  }
  
  let myCar = new Car("Honda", "Civic", 2021);
// console.log(myCar);

/* In this example, Car is a constructor function. new Car(...) creates a new object (myCar) based on the Car blueprint. */

/* 3. Prototypal Inheritance:
Definition: Objects can inherit properties and methods from other objects. */

/* 4. Encapsulation:
Definition: Encapsulation is the bundling of data and methods that operate on that data. */

