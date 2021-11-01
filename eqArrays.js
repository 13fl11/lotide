//  const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     let output1 = actual + ' === ' + expected;
//     console.log(`✅✅✅ Assertion Passed:  ${output1}`);
//   } else {
//     let output2 = actual + ' !== ' + expected;
//     console.log(`🛑🛑🛑 Assertion Failed:  ${output2}`);
//   }
// };

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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