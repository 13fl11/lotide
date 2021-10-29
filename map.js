let assertArraysEqual = function(actual, expected) {
  const result = eqArrays (actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
}

const array1 = ["ground", "control", "to", "major", "tom"];
const array2 = ["girl", "cup", "vwo", "me", "titi"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(array1, array1 => array1[0]);
console.log(results1);
const results2 = map(array2, array2 => array2[0]);
console.log(results2);


assertArraysEqual(results1, results2);




