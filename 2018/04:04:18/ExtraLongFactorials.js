// The factorial of the integer , written , is defined as:

// Calculate and print the factorial of a given integer.

// Note: Factorials of  can't be stored even in a  long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

// We recommend solving this challenge using BigIntegers.

// Input Format

// Input consists of a single integer

// Constraints


// Output Format

// Print the factorial of .

// Sample Input

// 25


// Sample Output

// 15511210043330985984000000


function extraLongFactorials(n) {
  // Complete this function
  var factorial = 1;
  for (var i = 2; i <= n; i++){
    factorial = factorial * i
  }
  console.log(factorial)
  console.log(Number.parseFloat(factorial).toFixed(0))
}

//not working

extraLongFactorials(25)

