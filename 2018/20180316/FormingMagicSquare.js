// We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal (of length ) is always equal to the same number (i.e., the magic constant).

// Consider a  matrix, , of integers in the inclusive range . We can convert any digit, , to any other digit, , in the range  at cost .

// Given , convert it into a magic square at minimal cost by changing zero or more of its digits. Then print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range .


// Input Format

// There are  lines of input. Each line describes a row of the matrix in the form of  space-separated integers denoting the respective first, second, and third elements of that row.

// Constraints

// All integers in  are in the inclusive range .


// Output Format

// Print an integer denoting the minimum cost of turning matrix  into a magic square.


// Sample Input

// 4 9 2
// 3 5 7
// 8 1 5


// Sample Output

// 1


function formingMagicSquare(s) {
  // Complete this function
  var length = s.length
  var vert = [];
  var hori = []
  for (var i = 0; i < length; i++){
    var sum1 = 0;
    var sum2 = 0;
    for (var j = 0; j < length; j++){
      sum1 = sum1 + s[i][j]
      sum2 = sum2 + s[j][i]
    }
    vert.push(sum1)
    hori.push(sum2)
  }
  var v = 0;
  for (var k = 0; k < vert.length; k++){
    if ((15 - vert[k]) < 0){
      v = v + (vert[k] - 15)
    } else {
      v = v + (15 - vert[k])
    }
  }
  var h = 0;
  for (var l = 0; l < hori.length; l++){
    if ((15 - hori[l]) < 0){
      h = h + (hori[l] - 15)
    } else {
      h = h + (15 - hori[l])
    }
  }
  if (v > h){
    return v;
  } else {
    return h;
  }
}

//Not passing all test

console.log(formingMagicSquare([ [ 4, 8, 2 ], [ 4, 5, 7 ], [ 6, 1, 6 ] ]))