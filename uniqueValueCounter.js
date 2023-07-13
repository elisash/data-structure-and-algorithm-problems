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
