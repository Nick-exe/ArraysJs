// How to use reduce in javascript
// reduce takes a reducer function that you provide and reduces the array down to a single value
// It uses an accumulator that is built upon through each and every iteration
// The accumulator is always the returned value from the previous iteration

const nums = [10, 22, 8, 43, 11];

const sum = nums.reduce((acc, val) => acc + val);

// on the first iteration the accumulator is by default "zero" and value here is 10
// so the return value of the first iteration is 10
console.log(sum);


// A more Complex example

const ppl = [['bob', 32], ['sandra', 24], ['john', 40]];

// Here we have a 2 dimensional array with name and age  stored inside a larger array
// We want to redue this array to an object

const pplObj = ppl.reduce((acc, val) => {
    acc[val[0]] = val[1]
    return acc;
}, {});

// the initial value here is an empty object {}
// we assign bob to 32, and this continues for the remaining iterations
// the console log should be {bob: 32, sandra: 24, john: 40}

console.log(pplObj);    