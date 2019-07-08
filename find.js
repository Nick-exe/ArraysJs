//find, iterates through each item in an array 
// until it reaches the first value within the array which passes a given test 
// At that point, it returns the item that it finds;

const fruit = ['apples', 'bananas', 'kiwi', 'strawberries', 'mangos'];
const food = ['spinach', 'quinoa', 'rice', 'kiwi', 'ramen', 'salmon'];

//We want to find the first item inside of food that is also inside of fruits 
//and set it to a variable called foundfruit

const foundFruit = food.find(_foodItem => fruit.includes(_foodItem));
//for each '_foodItem' in food, we want the one that includes a foodItem in fruits

console.log(foundFruit);

//kiwi is printed out
