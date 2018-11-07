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

 var now = 2018; 
 var yearJohn = 1989;
 var fullAge = 18; 

 // multiple operators
 var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators 
x *= 2;  // 26 * 2
console.log(x);
x += 10; // 26 * 2 + 10
console.log(x);