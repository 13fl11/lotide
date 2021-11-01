const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays (actual, expected);
  //console.log(typeof(result));
  if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  } 
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false
//     } 
//   }
//   return true
// }

/*The assertArraysEqual.js module should export its assertArraysEqual function
The assertArraysEqual.js file should require the eqArrays function instead of it being copied in there*/



module.exports = assertArraysEqual;

//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); 