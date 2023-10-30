const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map(num => num * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const filteredNumbers = numbers.filter(num => num > 2);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

const loop = numbers.forEach(num => num);

 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
const found = numbers.find(num => num < 3);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const arr = numbers.some((num ) => num > 5);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const array = numbers.every(num => num > 0);
