const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  let output = {} ;
  str = str.replace(/\s/g, '');// .toLowerCase();
  console.log(str);
  for (let letter of str) {
    //console.log(letter);
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
}

console.log(countLetters("lighthouse in the house"))