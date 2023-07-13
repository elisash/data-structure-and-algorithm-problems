function countUniqueValues(arr) {
  // declare two variables to store the input
  let freqCount = {};
  let uniq = [];
  // create a for loop that iterates through the array
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // create a condition and then push into uniq
    if (!freqCount[val]) {
      uniq.push(freqCount[val]);
    }
    freqCount[val] = 1;
  }

  console.log(uniq);
}
