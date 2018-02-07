// Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.


// Input Format

// The first line contains a single integer, . The next lines denote the matrix's rows, with each line containing space-separated integers describing the columns.


// Constraints


// Output Format

// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.


// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12


// Sample Output

// 15


function diagonalDifference(a) {
    // Complete this function
    var limit = a.length;
    var diag1 = 0;
    var diag2 = 0;
    for (var x = 0; x < limit; x++){
      diag1 = diag1 + a[x][x]
    }
    for (var y = 0; y < limit; y++) {
      diag2 = diag2 + a[y][limit - 1 - y]
    }
    var answer = diag1 - diag2
    if (answer > 0){
      return answer
    } else {
      return answer * -1
    }
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))