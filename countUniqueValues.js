// Implement a function called countUniqueValues,
//  which accepts a sorted array, and counts the unique
//  values in the array. There can be negative
//  numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  let freqCount = {};
  let uniq = [];

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (!freqCount[val]) {
      uniq.push(freqCount[val]);
    }
    freqCount[val] = 1;
  }

  console.log(uniq);
}
