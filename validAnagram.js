function validAnagram(arr1, arr2) {
  // check if there is an equal amount of letters
  if (arr1.length !== arr2.length) {
    return false;
  }
  // separate each letter and arranged them in alphabetical order
  let str1 = arr1.split("").sort().join("");
  let str2 = arr2.split("").sort().join("");
  // check that each key value matches
  if (str1 !== str2) {
    return false;
  } else {
    return true;
  }
}

// function validAnagram(arr1, arr2){
//     if (arr1.length != arr2.length){
//         return false
//     }
//     let word1 = {}
//     let word2 ={}
//     for(let letter of arr1){
//         if (word1[letter] = true)

// }
