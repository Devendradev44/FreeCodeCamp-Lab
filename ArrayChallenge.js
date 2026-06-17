// Array Challenges

const numbers = [5, 10, 15, 20, 25];

// Sum of array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Double values
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);
