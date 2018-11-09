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