// You are given an array of integers of size . You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.

// Input Format

// The first line of the input consists of an integer . The next line contains space-separated integers contained in the array.

// Output Format

// Print a single value equal to the sum of the elements in the array.

// Constraints


// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015


function aVeryBigSum(n, ar) {
    // Complete this function
    var answer = 0
    for (var i = 0; i < n; i++){
      answer = answer + Number(ar[i])
    }
    return answer
}


console.log(aVeryBigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))