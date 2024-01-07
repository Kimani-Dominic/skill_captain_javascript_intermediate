// Day 3
// Understanding Closures, IIEFS, Closure Use Cases and Pitfalls


// 1. Create an IIFE that calculates the sum of two numbers and immediately logs the result.

(function() {
    const sumNumbers = 5 + 67;
    console.log(sumNumbers);
})();
   
   // The output will be 72 for the sum of the  two integers
  
   
   //2. Implement a function `calculateTax` that accepts a tax rate and returns a closure function to calculate the tax amount of a purchase.

   function calculateTax(taxRate) {
    return function(purchaseAmount) {
        return purchaseAmount * (taxRate / 100);
    };
}
const taxRate10Percent = calculateTax(10);

const purchaseAmount = 1000;

const taxAmount10Percent = taxRate10Percent(purchaseAmount);

console.log(`Tax amount at 10% rate: Kes${taxAmount10Percent}`);
