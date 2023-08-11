//Explain how the averagePair function works, and provide an example of how to use it with an array and
//a target number to find out if there exists a pair of elements in the array whose average is equal to the target number.


function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
