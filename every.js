// Array.prototype.every
//every, iterates over each item inside of an array and returns true if every single item in 
// the Array passes a given callback function
//Otherwise returns false

const nums = [22, 48, 16, 10, 54];

// Here we want to create a variable that will be true if every single item in the array is an even number

const even = nums.every(_num => _num % 2 === 0);

console.log(even);
// console logs true


// A MORE COMPLEX EXAMPLE
// A function That tests if every single item inside of a string is 
//An empty character,  a white-space character or a new line character

const emptyString = str => str.split('').every(_char => _char === ' ' || _char === '\n');
// .split returns an array of every single character

//.every chararcter in that array, test conditions

const str1 = '     ';
const str2 = 'Hello world';

console.log(emptyString(str1));
console.log(emptyString(str2));

//The first statement logs true cos every element is whitespace
//The second statement logs false because although a whitespace exist in the string, other characters also exist



