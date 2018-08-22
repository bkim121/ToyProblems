// You will be given two arrays of integers. You will be asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.


// Input Format

// The first line contains two space-separated integers describing the respective values of , the number of elements in array , and , the number of elements in array .
// The second line contains  distinct space-separated integers describing .
// The third line contains  distinct space-separated integers describing .


// Output Format

// Print the number of integers that are considered to be between  and .


// Sample Input

// 2 3
// 2 4
// 16 32 96


// Sample Output

// 3


function getTotalX(a, b) {
  // Complete this function
  var multiples = [];
  for (var i = b[0]; i >= a[a.length - 1]; i--){
    var multiple = true;
    for (var j = 0; j < a.length; j++){
      if ((i % a[j]) !== 0){
        multiple = false;
      }
    }
    if (multiple){
      multiples.push(i)
    }
  }
  var answer = [];
  for (var k = 0; k < multiples.length; k++){
    var factor = true;
    for (var l = 0; l < b.length; l++){
      if ((b[l] % multiples[k]) !== 0){
        factor = false;
      }
    }
    if (factor){
      answer.push(k)
    }
  }
  return answer.length;
}

console.log(getTotalX([ 2, 4 ], [ 16, 32, 96 ]))