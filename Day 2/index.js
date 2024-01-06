//Day 2 Assignments
// 1. Declare a variable `globalVariable` in the global scope and assign it a value.


const globalVariable = "This is my intermediate course on javascript";

function globalFunction() {
    console.log(globalVariable);
}

globalFunction();
console.log(globalVariable);




//2. Create a function `localScopeDemo` that declares a variable `localVariable` and logs it to the console.

function localScopeDemo() {
    const localVariable = "This is a variable expressing the usage of a local function scope";
    console.log(localVariable);
}

localScopeDemo();


//3. Inside `localScopeDemo`, declare another function `innerFunction` that logs the `globalVariable` from the global scope.

const globalVariable = "This is my intermediate course on javascript";

function globalFunction() {
    console.log(globalVariable);
}
function localScopeDemo() {
    const localVariable = "This is a variable expressing the usage of a local function scope";
    console.log(localVariable);

function innerFunction() {
    console.log(globalVariable);
    }
}

console.log(globalVariable);


//4. Call `localScopeDemo` and then call `innerFunction` from within it.

function localScopeDemo() {
    const localVariable = "This is a variable expressing the usage of a local function scope";

    function innerFunction() {
    console.log(localVariable);
    }
    return innerFunction;
}

const callExample = localScopeDemo();
callExample();
