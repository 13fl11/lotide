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

const test = countLetters("lighthouse in the house");
assertEqual(test, { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1, l: 1 })

console.log(countLetters("lighthouse in the house"))