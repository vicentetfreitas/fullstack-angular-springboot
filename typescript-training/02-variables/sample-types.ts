/**
 * Basic Type
 * > boolean: true/false values
 * > number: Supports integer and floating point numbers
 * > string: Text date. Enclosed in single or double quotes
 * > any: Supports "any" datatype assignment
 *
 * Define Variables
 * > let <variableName>: <type> = <initial value>
 *
 * TypeScript: "let" keyword
 * > var: not used
 * > let: new used
 *
 * TypeScript is Strongly Typed
 *
 * Type: any
 * > we can assign different values of any type
 *
 * Display Output
 * >
 *
 * Run the App
 * >
 *
 * Template Strings (``)
 * > console.log(`Hi ${firstName} + " " + ${lastName}`);
 *
 */
// Input
let found: boolean = true; //true or false
let grade: number = 88.6; // numbers floating point or decimal
let firstName: string = "Anup"; //String double quotes
let lastName: string = 'Kumar'; //String single quotes

//Output
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);

// let´s break it!
// found = 0;
// grade = "A";
// firstName = false;

// use template string
console.log(`Hi ${firstName} ${lastName}`);
