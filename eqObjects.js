const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true); // => true


  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false); // => false


  //step 3
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true); // => true
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false); // => false