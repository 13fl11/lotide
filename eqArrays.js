//  const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     let output1 = actual + ' === ' + expected;
//     console.log(`✅✅✅ Assertion Passed:  ${output1}`);
//   } else {
//     let output2 = actual + ' !== ' + expected;
//     console.log(`🛑🛑🛑 Assertion Failed:  ${output2}`);
//   }
// };
// first one: has bugs
// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   };
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// second one: 
// const eqArrays = function(arr1, arr2) {
//   let result = true;

//   if(arr1 === null && arr2 === null) {
//     return true;
//   }
  
//   if (arr1 === undefined || arr2 === undefined) {
//     if (arr1 === arr2) {
//       return result;
//     }
//     return false;
//   }

//   //case 1: check if two array are of same length. else two array are not perfect match
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       //if any one item in an array is not equal then return false
//       if (arr1[i] !== arr2[i]) {
//         result = false;
//         break;
//       }
//     }
//   } else {
//     result = false;
//   }
  
//   return result;
// };


const eqArrays = function(Array, Array2) {
  if (Array.length !== Array2.length)
  return false;
  for (let i = 0; i < Array.length; i = i + 1) {
    if (Array[i] !== Array2[i]) {
      return false
    }
  }
  return true
  }

//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

//assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), true);

module.exports = eqArrays;