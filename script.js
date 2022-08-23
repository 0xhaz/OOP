"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // never create a method in constructor function
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// 1. New empty {} object is created
// 2. Function is called, this = {} empty object
// 3. {} linked to a prototype
// 4. function automatically return {}

// constructor function
// const jonas = new Person("Jonas", 1991);
// // console.log(jonas);
// const matilda = new Person("matilda", 2017);
// const jack = new Person("jack", 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ == Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 4, 5, 6, 9, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console.
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and
// log the new speed to the console.
// 4. Create 2 "Car" objects and experiment with calling 'accelerate' and 'brake'
// multiple times on each of them

// Test data:
// Data car 1: "BMW" going at 120 km/h
// Data car 2: "Mercedes" going at 95 km/h

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const car1 = new Car("BMW", 120);
// console.log(car1);

// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();

// const car2 = new Car("Mercedes", 95);
// console.log(car2);

// car2.accelerate();
// car2.brake();
// car2.brake();
// car2.brake();
// car2.brake();
// car2.brake();
// car2.accelerate();

// ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

// Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const jessica = new PersonCl("Jessica", 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
// console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// Setters & Getters
// const account = {
//   owner: "Jones",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// Object.create()
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();

// Coding challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts
// it to km/h before storing the value by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and
// with the getter and setter
// Test data:
// Data car 1: 'Ford' going at 120 km/h

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     const mile = this.speed / 1.6;
//     console.log(`${this.speed} is going at a ${mile} mi/h`);
//   }

//   set speedUS(km) {
//     const us = this.speed * 1.6;
//     console.log(`${this.make} is going at a ${us} km/h`);
//   }
// }

// const ford = new CarCl("Ford", 120);
// console.log(ford);
// ford.speedUS = 50;
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;

// Inheritance Between "Classes" : Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;
// };

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");
// mike.introduce();

// Coding Challenge #4
// Your tasks:
// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also
// update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
// Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV("Tesla", 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// Inheritance between 'Classes': ES6 Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// Inheritance between 'Classes': Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steve = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "Computer Science");
// console.log(jay);
// jay.introduce();
// jay.calcAge();

// Public fields
// Private fields
// Public methods
// Private methods

// class Account {
//   // Public fields (instances)
//   locale = navigator.language;

//   // Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this; // enable chaining
//     }
//   }

//   // Private methods
//   // #approveLoan(val)
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111);
// console.log(acc1);

// // acc1.movements.push(250);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1._approveLoan(1000);
// acc1.getMovements();

// console.log(acc1.getMovements());
// console.log(acc1.#pin);
// console.log(acc1.#movements);

// Encapsulation: Protected Properties and Methods

// Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

// Coding challenge #4
// Your tasks:
// 1. Re-create challenge #3 but this time using ES6 classes: create an "EVCl"
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment the chaining!
// Data car 1: 'Rivian' going at 120km/h, with a charge of 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
