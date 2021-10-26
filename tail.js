const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let output1 = actual + ' === ' + expected;
    console.log(`✅✅✅ Assertion Passed:  ${output1}`);
  } else {
    let output2 = actual + ' !== ' + expected;
    console.log(`🛑🛑🛑 Assertion Failed:  ${output2}`);
  }
};

const tail = function(arr) {
  let output = [];
  for (let i = 1; i < arr.length; i++) {
    output.push(arr[i]);
  }
  console.log(output);
  return output;
  
};

//arr = ["Hello", "Lighthouse", "Labs"];
//console.log(arr.length);

//const result = tail(["Hello", "Lighthouse", "Labs"]);
//console.log(result);
//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs");

const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);