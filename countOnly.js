const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      console.log(item);
      console.log(typeof(results[item]));
      if (results[item]) {
      results[item] += 1;
      } else {results[item] = 1;}
  }
} return results;
}


// const countOnly = function (allItems, itemsToCount) {
//   let answerResult = {};
//   for (const item of allItems) {
//     if (itemsToCount[item]) {
//       if (!answerResult[item]) {
//         answerResult[item] = 1;
//       } else {
//         answerResult[item] += 1;
//       }
//     }
//   }
//   return answerResult;
// }
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);