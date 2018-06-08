// Create a list, , of  empty sequences, where each sequence is indexed from  to . The elements within each of the  sequences also use -indexing.
// Create an integer, , and initialize it to .

// The  types of queries that can be performed on your list of sequences () are described below:
// Query: 1 x y
// Find the sequence, , at index  in .

// Append integer  to sequence .
// Query: 2 x y

// Find the sequence, , at index  in .
// Find the value of element  in  (where  is the size of ) and assign it to .
// Print the new value of  on a new line

// Task
// Given , , and  queries, execute each query.

// Note:  is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.


// Input Format

// The first line contains two space-separated integers,  (the number of sequences) and  (the number of queries), respectively.
// Each of the  subsequent lines contains a query in the format defined above.


// Constraints

// It is guaranteed that query type  will never query an empty sequence or index.


// Output Format

// For each type  query, print the updated value of  on a new line.


// Sample Input

// 2 5
// 1 0 5
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1


// Sample Output

// 7
// 3


function dynamicArray(n, queries) {
  /*
  * Write your code here.
  */
  var array1 = [];
  var array2 = [];
  var lastAnswerArray = [];
  var lastAnswer
  for (var i = 0; i < queries.length; i++) {
    if (queries[i][0] === 1) {
      if (queries[i][1] === 0) {
        array1.push(queries[i][2])
      } else {
        array2.push(queries[i][2])
      }
    } else {
      if (lastAnswer === undefined){
        if (queries[i][1] === 1){
          lastAnswer = array2[(array2.length - 1)]
          lastAnswerArray.push(lastAnswer)
        } else {
          lastAnswer = array1[(array1.length - 1)]
          lastAnswerArray.push(lastAnswer)
        }
      } else {
        if (((queries[i][1] ^ lastAnswer) % 2) === 0) {
          lastAnswer = array1[(array1.length - 1)]
          lastAnswerArray.push(lastAnswer)
        } else {
          lastAnswer = array2[(array2.length - 1)]
          lastAnswerArray.push(lastAnswer)
        }
      }
    }
  }
  return lastAnswerArray
}




console.log(dynamicArray(2, [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]))
