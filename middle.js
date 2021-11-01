// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false
//     } 
//   }
//   return true
// }

// let assertArraysEqual = function(actual, expected) {
//   const result = eqArrays (actual, expected);
//   if (result === true) {
//     console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
//   }
// };


const middle = function (array) {
  let arrLength = array.length;
  let output = [];
  if (arrLength <= 2) {
    return output;
  } else if (arrLength % 2 === 1) {
    let midIndex = Math.floor(arrLength / 2);
    output.push (array[midIndex]);
  } else if (arrLength % 2 === 0) {
    output.push(array[array.length / 2] - 1);
    let midIndex = arrLength / 2;
    output.push(array[midIndex]);
  }
  return output;
}

/*
The middle.js module should export its middle function
The test code should be separated into its own file (test/middleTest.js)
The test code should require the middle and assertArraysEqual modules in order to run its test code
*/


module.exports = middle;


/*
console.log(middle([1])) // => []
middle([1, 2]) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 4])) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([3, 4]));

*/