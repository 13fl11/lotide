const eqArrays = require('./eqArrays');

 const assertArraysEqual = function(arr1, arr2) {
   if (eqArrays(arr1, arr2)) {
     console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}.`);
   } else {
     console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}.`);
   }
 };

/*The assertArraysEqual.js module should export its assertArraysEqual function
The assertArraysEqual.js file should require the eqArrays function instead of it being copied in there*/



module.exports = assertArraysEqual;

//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); 