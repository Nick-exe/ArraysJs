//Array.prototype.filter
//filter calls a provided callback function once for each element in an array and then 
//constructs a NEW ARRAY for all the values for which the callback returns true;

// N/B filter creates a new array without mutating the original array

const fruit = ['apples', 'bananas', 'kiwi', 'strawberries', 'mangos'];
const food = ['spinach', 'quinoa', 'rice', 'kiwi', 'ramen', 'salmon', 'apples', 'bread', 'strawberries'];

//We want to create an array of all the items of food that is also inside of fruit

const foundFruit = food.filter(_foodItem => fruit.includes(_foodItem));

console.log(foundFruit);

//console should log [ 'kiwi', 'apples', 'strawberries' ]

//A MORE COMPLICATED EXAMPLE

// We have an array of numbers, and we want to create a function that 
//whenever you pass any number into that function, it returns an array of all of the numbers inside this numbers array that is evenly divisible by the number you pass it.

const numbers = [33, 54, 67, 11, 45, 901, 121, 99, 1005];

const numbersDivisibleBy = (num) => numbers.filter(_number => _number % num === 0 );

console.log(numbersDivisibleBy(11));
//console should log [ 33, 11, 121, 99 ]
