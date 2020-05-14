/**
 * given a range of numbers between 0 and n
 * print fizz on multiples of 3
 * print buzz on multiples of 5
 * print fizzbuzz on multiples of both 3 and 5
 */
const fizzBuzz = (num) => {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log("fizzBuzz");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
};

console.log(fizzBuzz(40));
