// An integer  is a divisor of an integer  if the remainder of .

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

// Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for ,  is a divisor of  each time it occurs so the answer is ).


// Input Format

// The first line is an integer, , indicating the number of test cases.
// The  subsequent lines each contain an integer, .


// Output Format

// For every test case, count the number of digits in  that are divisors of . Print each answer on a new line.


// Sample Input

// 2
// 12
// 1012


// Sample Output

// 2
// 3



function findDigits(n) {
  var string = n.toString()
  var divisible = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] !== 0){
      if (n % string[i] === 0){
        divisible++
      }
    }
  }
  return divisible
}

findDigits(1012)