// main.js
//Implement a `main.js` file that imports the factorial function and uses it to calculate and display the factorial of a given number.

//import module
import { calculateFactorial } from './utils';

const number = 5;
const factorial = calculateFactorial(number);

console.log(`The factorial of ${number} is: ${factorial}`);

//output ==> The factorial of 5 is: 120