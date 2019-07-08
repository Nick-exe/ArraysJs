//Array.prototype.map
//map iterates through each item in an array and uses the provided callback function to apply logic to each
//item
// A new array is returned with all of the new values that have been returned from the given function 
// It doesnt modify or mutate the new array

const ages = [21, 44, 88, 19, 22, 37];

// Each number in the array above represents a persons age who is older than 18
// We want to create a function that uses map to build a new array representing their distance from 18

const agesSince18 = ages.map(_age => _age - 18);

console.log(agesSince18);

//console should log [ 3, 26, 70, 1, 4, 19 ]

//// A MORE COMPLEX EXAMPLE

//Say we have an array of objects, an we want to create a new array from the properties of those objects

const people = [
    {'name': 'bob', 'age' : 21},
    {'name': 'josey', 'age' : 44},
    {'name': 'phillip', 'age' : 88},
    {'name': 'casey', 'age' : 19},
];

//An array of ages only from the above

const agesOnly = people.map(_person => _person.age); //_person is the iteration value
const agesSince19 = agesOnly.map(_age => _age - 19);

console.log(agesOnly);
console.log(agesSince19);


// Another Example
// another default argument that is automatically passed to the function provided to map is the INDEX

const agesOnlyWithIndex = people.map((_person, _personIndex ) => {
    _person.age;
    console.log(_personIndex);
    console.log(_person.age);
});

//personIndex represents the iteration number you're on

//Console will log
// 0
// 21
// 1
// 44
// 2
// 88
// 3
// 19

