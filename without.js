const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
}


let assertArraysEqual = function(actual, expected) {
  const result = eqArrays (actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};


const without = function (sourceArr, itemToRemoveArr) {
let output = [];
for (let i = 0; i < sourceArr.length; i++) {
  if (!valueinSource(sourceArr[i], itemToRemoveArr)) {
    output.push(sourceArr[i]);
  }
}
return output;
}

const valueinSource = function (value, arr) {
  let spot = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      spot = true;
    }
  }
  return spot;
}

//Test Code

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = without(["hello", "world", "lighthouse"], ["lighthouse"]); 
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);