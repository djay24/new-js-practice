/***********
 * variables and data types
 */

// var firstName = 'DJ';

// var lastName = 'Rodriguez'; // in '' is a string
// var age = 21; // is a number
// console.log(firstName, lastName);

// var fullAge = true;
// console.log(fullAge);

// var job; 
// console.log(job);

// job = 'Teacher';
// console.log(job);

/***********
 * variable mutation and type coercion
 */

// var firstName = 'DJ';
// var age = 21;
// console.log(firstName + ' ' + age);
// //type coercion
// var job, isMarried;

// job = 'produce worker';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

// // variable mutation
// age = 'twenty one';
// job = 'boxer';

//  alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(lastName);

/************
 * Basic operators
 */
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33

// // math operators
// yearJohn =  now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn, yearMark);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'mark is older');

/************
 * operator precendence 
 */

//  var now = 2018; 
//  var yearJohn = 1989;
//  var fullAge = 18; 

//  // multiple operators
//  var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // grouping 
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators 
// x *= 2;  // 26 * 2
// console.log(x);
// x += 10; // 26 * 2 + 10
// console.log(x); 

/************
 * coding challenge
 */

//  var johnMass = 92; // kg
//  var markMass = 78;

//  var johnHeight = 1.95; // meters
//  var markHeight = 1.69;

//  var johnBMI = johnMass / (johnHeight * johnHeight);
//  var markBMI = markMass / (markHeight * markHeight);

//  var bmiCompare = johnBMI > markBMI;
//  console.log(johnBMI.toFixed(1), markBMI.toFixed(1), bmiCompare);

/***********
 * if / else statements
 */

//  var firstName = 'John';
//  var civilStatus = 'single';

//  if (civilStatus === 'married') {
//     console.log(firstName + ' is married!')
//  } else {
//     console.log(firstName + ' is not married!')
//  }

//  var isMarried = true; 
//  if (isMarried) {
//     console.log(firstName + ' is married!')
//  } else {
//     console.log(firstName + ' is not married!')
//  }

//   var johnMass = 92; // kg
//  var markMass = 78;

//  var johnHeight = 1.95; // meters
//  var markHeight = 1.69;

//  var johnBMI = johnMass / (johnHeight * johnHeight);
//  var markBMI = markMass / (markHeight * markHeight);

//  if (markBMI > johnBMI) {
//      console.log('Mark has a higher bmi that john');
//  } else {
//      console.log('John has a higher bmi than Mark');
//  }

// //  var bmiCompare = johnBMI > markBMI;
// //  console.log(johnBMI.toFixed(1), markBMI.toFixed(1), bmiCompare);

/*************
 * Boolean logic
 */

//  var firstName = 'John';
//  var age = 20;

//  if (age < 13 ) {
//      console.log(firstName + ' is a boy')
//  } else if (age >= 13 && age < 20 ) {
//     console.log(firstName + ' is a teenager')
//     } else if (age >= 20 && age < 30) {
//         console.log(firstName + ' is a young man')
//     } else {
//     console.log(firstName + ' is a man')
//  };

/*******
 * Ternary opererator and switch statements
 */

// var firstName = 'John';
// var age = 21;

// // Ternary 
// age >= 18 ? console.log(firstName + ' can drink a beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'Beer' : 'Juice';
// console.log(drink)

// this is how you would do this with a if else
// if (age >= 18) {  
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives for uber');
//         break;
//     case 'designer': 
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default: 
//     console.log(firstName + ' does something else');
// }


// switch (true) {
//     case age < 13: 
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30: 
//         console.log(firstName + ' is a young man');
//         break;
//     default: 
//         console.log(firstName + ' is a man');
// }

/*********
 *  Truthy and Falsy Values and equality operators
 */

// falsy  values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// height = 23;
// if (height || height == 0) {
//     console.log('variable is defined')
// } else {
//     console.log('variable is not defined')
// }

// // equality operators

// if (height == '23') {
//     console.log('The == does type coercion');
// };

/******
 * coding challenge 2
 */

// var johnTeamAverage = (95 + 84 + 120) / 3;

// var mikeTeamAverage = (103 + 95 + 102) / 3;

// var maryTeamAverage = (97 + 135 + 105) / 3;
// console.log(johnTeamAverage, mikeTeamAverage, maryTeamAverage)

// // // terinary
// // johnTeamAverage > mikeTeamAverage ? 
// // console.log("John's team averages more than Mike's with an average score of " + johnTeamAverage ) : 
// // console.log("Mike's team averages more than John's with an average score of " + mikeTeamAverage);

// // this is how you would add the third team to the logic
// if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
//     console.log("Johns team wins");
// } else if (mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage) {
//     console.log('Mikes team wins');
// } else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage) {
//     console.log('Marys team wins')
// } else {
//     console.log('There is a draw')
// }

// // if / else
// // if (johnTeamAverage > mikeTeamAverage) {
// //     console.log("John's team averages more than Mike's with an average score of " + johnTeamAverage )
// // } else if ( mikeTeamAverage > johnTeamAverage ) {
// //     console.log("Mike's team averages more than John's with an average score of " + mikeTeamAverage)
// // } else {
// //     console.log('There is a draw')
// // }

/********
 * Functions
 */

// function calculateAge(birthyear) {
//     return 2018 - birthyear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUnitlRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else {
//         console.log(firstName + ' is already retired')
//     }
// } 

// yearsUnitlRetirement(1990, 'John')
// yearsUnitlRetirement(1948, 'Mike')
// yearsUnitlRetirement(1969, 'Jane')

/*********
 * Function statements and expressions
 */

// Function decleration
// function whatDoYOuDO(job, firstName) {}

 // Function Expression
//  var whatDoYOuDo = function(job, firstName) {
//      switch(job) {
//          case 'teacher':
//             return firstName + ' teaches kids how to code'
//          case 'driver': 
//             return firstName + ' drives for uber in Los Angeles'
//          case 'designer': 
//             return firstName + ' designs nice websites'
//          default:
//             return firstName + ' does something else'
//      }
//  }

//  console.log(whatDoYOuDo('teacher', 'John'));
//  console.log(whatDoYOuDo('designer', 'Jane'));
//  console.log(whatDoYOuDo('retired', 'Mike')); 

/********
 * Arrays
 */

 // initialize new array
//  var names = ['John', 'Mike', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names[2])
//  console.log(names.length)

// // mutate array data
//  names[1] = 'Ben'
//  names[names.length] = 'Mary';
//  console.log(names)

//  // different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.')
// console.log(john);

// john.pop(); // removes the last element of the array
// john.shift(); // removes the first element of the array
// console.log(john);

// console.log(john.indexOf(1990)); // shows the number of where the item is at in array if -1 it is not in array

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);

/********
 * Coding challenge 3
 */
//  dinnerPrices = [124, 48, 268];
 
//  function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//      } else if (bill >= 50 && bill < 200  ) {
//         percentage = .15;
//      } else {
//         percentage = .1;
//      } 
//      return percentage * bill;
//  }

//  console.log(tipCalculator(300));

//  var bills = [124, 48, 268];
//  var tips = [tipCalculator(bills[0]),
//              tipCalculator(bills[1]),
//              tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2] ]
//     console.log(tips, finalValues);

/*******
 * objects and properties
 */

//  // object literal
//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1990,
//      family: ['Jane', 'Mark', 'Bob', 'Emilly'],
//      job: 'teacher',
//      isMarried: false
//  };

//  console.log(john.firstName); // dot notation
//  console.log(john['lastName']); // using bracket notation
//  var x = 'birthYear'
//  console.log(john[x]);

//  john.job = 'designer'; // mutating data
//  john['isMarried'] = true;
//  console.log(john);

//  // new object syntax
//  var jane = new Object( );
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane)

/******
 * objects and methods
 */

// var john = {
//          firstName: 'John',
//          lastName: 'Smith',
//          birthYear: 1992,
//          family: ['Jane', 'Mark', 'Bob', 'Emilly'],
//          job: 'teacher',
//          isMarried: false, 
//          calcAge: function() {
//              this.age = 2018 - this.birthYear; // this keyword looks within its own object
//          }
//      };

// john.calcAge();
// console.log(john);

/******
 *  coding challenge 4
 */

// var john = {
//     fullName: 'John Smith',
//     mass: 92, 
//     height: 1.95,
//     calcBMI: function () {
//        this.bmi = this.mass / (this.height * this.height);
//        return this.bmi;
//     }
// };

// var mark = {
//     fullName: 'Mark Miller',
//     mass: 78, 
//     height: 1.69,
//     calcBMI: function () {
//        this.bmi = this.mass / (this.height * this.height);
//        return this.bmi;
//     }
// };

// john.calcBMI();
// mark.calcBMI();

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher bmi of ' + john.bmi);
// } else if (mark.calcBMI() > john.calcBMI()) {
//     console.log(mark.fullName + ' has a higher bmi of ' + mark.bmi);    
// } else {
//     console.log('They have the same BMI')
// };

/********
 * loops and iteration
 */

//  for (var i = 0; i <= 10; i++) {
//      console.log(i)
//  }
// //  i = 0, 0 < 10 true, log i to console i ++
// //  i = 1, 1 < 10 true, log i to console i ++

// //  for loop
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i])
// }

// // while loop 
// var i = 0
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// // continue and break statements

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string' ) continue;
//     console.log(john[i])
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string' ) break;
//     console.log(john[i])
// }

// // looping backwards
// for (var i = john.length - 1; i >= 0; i-- ) {
//     console.log(john[i])
// }

/*****
 * coding challenge 5
 */

//  var john = {
//      fullName: 'John Smith',
//      bills: [124, 48, 268, 180, 42],
//      calcTips: function() {
//          this.tips = [];
//          this.finalValues = [];

//          for (var i = 0; i < this.bills.length; i++)
//          {
//              // determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 50 ) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
//              // add results to the corresponding arrays
//              this.tips[i] = bill * percentage;
//              this.finalValues[i] = bill + bill * percentage
//          }
//      }
//  }

//  var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 475, 110,  45],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++)
//         {
//             // determine percentage based on tipping rules
//            var percentage;
//            var bill = this.bills[i];

//            if (bill < 100 ) {
//                percentage = .2;
//            } else if (bill >= 100 && bill < 300) {
//                percentage = .15;
//            } else {
//                percentage = .25;
//            }
//             // add results to the corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage
//         }
//     }
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i]
//     }
//     return sum / tips.length;
// }

//  john.calcTips();
//  mark.calcTips();

//  john.average = calcAverage(john.tips);
//  mark.average = calcAverage(mark.tips);
//  console.log(john, mark);

//  if (john.average > mark.average) {
//      console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average)
//  } else {
//     console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average)
//  }

/******
 *  this keyword in practice
 */

//  calculateAge(1996)

//  function calculateAge(year) {
//      console.log(2016 - year);
//      console.log(this);
//  };

//  var john = {
//      name: 'John', 
//      yearOfBirth: 1990,
//      calculateAge: function() {
//          console.log(this);
//          console.log(2016 - this.yearOfBirth)

//         //  function innerFunction() {
//         //      console.log(this);
//         //  }
//         //  innerFunction();
//      }
//  }

//  john.calculateAge();

//  var mike = {
//      name: 'Mike', 
//      yearOfBirth: 1984,
//  };
//  mike.calculateAge = john.calculateAge;
//  mike.calculateAge();

/**********
 * 
 */

//  let testButton = document.getElementById('submitButton');
//  testButton.addEventListener("click", function(){
//     alert("hello");
//  });

 let submitButton = document.getElementById('submitButton');
 submitButton.addEventListener("click", function() {
     alert('hello');    
  });