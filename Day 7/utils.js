// utils.js
// Create a `utils.js` module that exports a function to calculate the factorial of a number.


const calculateFactorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
};
// export module 
module.exports = {
    calculateFactorial,
};
