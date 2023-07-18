//Write a recursive function called reverse which accepts a string
// and returns a new string in reverse.
function reverse(str) {
  let newArr = [];
  // if(str.length === 1){
  //     newArr.push(str[0])
  // }
  if (str.length === 1) {
    return str[0];
  } else {
    newArr.push(str[str.length - 1]);
  }
  newArr = newArr.concat(reverse(str.slice(0, -1)));
  return newArr.join("");
}
