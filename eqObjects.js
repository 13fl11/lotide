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


// const eqObjects = function(object1, object2) {
//   let arrayKeys1 = Object.keys(object1);
//   let arrayKeys2 = Object.keys(object2);
//   if (arrayKeys1.length !== arrayKeys2.length) {
//     return false;
//   }
//   for (const value of arrayKeys1) {
//     if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
//       return eqArrays(object1[value], object2[value]);
//     } else if (object1[value] !== object2[value]) {
//         return false;
//       }

//   }
//   return true;
// };

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // checks # keys in each object via key arrays lengths
    return false;
  }

  for (const key in object1) { // for all the keys in object1
    
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) { //if the key in object1 does not equal key in object2
      return false;
    }
  }
  return true;

  /* using a for .. of
  for (const key of Object.keys(object1)) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
  */

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