// You've been given a recursive function called fizzBuzzRecursive that prints out a sequence of numbers and strings based on the following rules:

// If a number is divisible by both 3 and 5, print "FizzBuzz".
// If a number is divisible by only 3, print "Fizz".
// If a number is divisible by only 5, print "Buzz".
// If the number doesn't satisfy any of the above conditions, print the number itself.


function fizzBuzzRecursive(n) {
  if (n <= 0) {
    return;
  }

  fizzBuzzRecursive(n - 1);

  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
