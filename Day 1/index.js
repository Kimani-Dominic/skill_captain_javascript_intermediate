// Day 1 ,, ES6 

//You are given a string of text. Write a function that takes this text as input and returns a modified version using ES6 template literals.
// Replace all occurrences of the word "javascript" (case insensitive) with "ES6".


function changeText(text) {
    const modifiedText = text.replace(/javascript/gi, 'ES6');
    return modifiedText;
}

const originalText = 'Javascript is used in both frontend and backend, making javascript to be widely used';
const modifiedText = changeText(originalText);
console.log(modifiedText);


