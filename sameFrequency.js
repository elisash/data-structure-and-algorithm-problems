function sameFrequency(num1, num2) {
  // create a variable that stores the numbers as strings;
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  // declare two variables to store the counts of each numb string
  let countNum1 = {};
  let countNum2 = {};

  // create a loop that iterates through the string of numbers for the first set
  for (let i = 0; i < strNum1.length; i++) {
    // create a condition that states if the string number is on the hash to add 1 and if it's not to added and set it to 1
    if (countNum1[strNum1[i]]) {
      countNum1[strNum1[i]] += 1;
    } else {
      countNum1[strNum1[i]] = 1;
    }
  }
  // repeat loop with set of number 2
  for (let j = 0; j < strNum2.length; j++) {
    if (countNum2[strNum2[j]]) {
      countNum2[strNum2[j]] += 1;
    } else {
      countNum2[strNum2[j]] = 1;
    }
  }
  // create a third loop to compare if they are equal
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
  return true;
}

sameFrequency(3589578, 5879385);
sameFrequency(22, 222);
sameFrequency(34, 14);
