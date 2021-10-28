const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
}

const eqObjects = function(object1, object2) {
  let arrayKeys1 = Object.keys(object1);
  let arrayKeys2 = Object.keys(object2);
  if (arrayKeys1.length !== arrayKeys2.length) {
    return false;
  }
  for (const value of arrayKeys1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value]);
    } else if (object1[value] !== object2[value]) {
        return false;
      }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);

  if(!result) {
    console.log(console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  } else {
    console.log(console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`))
  }
};

//Test code:

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab, ba); // true
assertObjectsEqual(ab, abc); // false
assertObjectsEqual(cd, dc); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); //false