const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let output1 = actual + ' === ' + expected;
    console.log(`✅✅✅ Assertion Passed:  ${output1}`);
  } else {
    let output2 = actual + ' !== ' + expected;
    console.log(`🛑🛑🛑 Assertion Failed:  ${output2}`);
  }
};

const findKey = function (object, callback) {
  let arrKey = Object.keys (object);
  console.log(arrKey);
  for (let elm of arrKey) {
    if (callback(object[elm])) { 
      //console.log(key)
      //console.log(typeof key)
      return elm
    } 
  }
}

let output11 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(typeof output11);

let output22 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(typeof output22);


assertEqual(output11, output22);