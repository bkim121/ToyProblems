// You are given a sequence of  integers, . Each element in the sequence is distinct and satisfies . For each  where , find any integer  such that  and print the value of  on a new line.


// Input Format

// The first line contains an integer, , denoting the number of elements in the sequence.
// The second line contains  space-separated integers denoting the respective values of .


// Constraints

// , where .
// Each element in the sequence is distinct.
// Output Format

// For each  from  to , print an integer denoting any valid  satisfying the equation  on a new line.


// Sample Input 0

// 3
// 2 3 1


// Sample Output 0

// 2
// 3
// 1


function permutationEquation(p) {
  // Complete this function
  var obj = {};
  for (var i = 0; i < p.length; i++){
    obj[p[i]] = i + 1
  }
  var array = []
  for (var j = 1; j <= p.length; j++){
    array.push(obj[obj[j]])
  }
  return array
}

permutationEquation([ 2, 3, 1 ])