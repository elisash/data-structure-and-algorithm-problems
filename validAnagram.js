function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    // console.log(lookup);
  }

  // // console.log(lookup);

  for (let i = 0; i < arr2.length; i++) {
    let letter = arr2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
      // console.log(lookup);
    }
  }

  return true;
}

validAnagram("indiang", "ndianif");
validAnagram("car", "rat");

// function validAnagram(arr1, arr2) {
//   // check if there is an equal amount of letters
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // separate each letter and arranged them in alphabetical order
//   let str1 = arr1.split("").sort().join("");
//   let str2 = arr2.split("").sort().join("");
//   // check that each key value matches
//   if (str1 !== str2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validAnagram(arr1, arr2){
//     if (arr1.length != arr2.length){
//         return false
//     }
//     let word1 = {}
//     let word2 ={}
//     for(let letter of arr1){
//         if (word1[letter] = true)

// }
