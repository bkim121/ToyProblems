// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time () to arrived late ().

// Given the arrival time of each student, determine if the class is canceled.


// Input Format

// The first line of input contains , the number of test cases.

// Each test case consists of two lines.

// Note: Non-positive arrival times () indicate the student arrived early or on time; positive arrival times () indicate the student arrived  minutes late.


// Output Format

// For each test case, print the word YES if the class is canceled or NO if it is not.

// Note
// If a student arrives exactly on time , the student is considered to have entered before the class started.


// Sample Input

// 2
// 4 3
// -1 -3 4 2
// 4 2
// 0 -1 2 1


// Sample Output

// YES
// NO

function angryProfessor(k, a) {
  // Complete this function
  console.log(k, a)
  var early = 0;
  for (var i = 0; i < a.length; i++){
    if (a[i] <= 0){
      early++
    }
  }
  if (early >= k){
    return 'NO'
  } else {
    return 'YES'
  }
}

angryProfessor(3, [ -1, -3, 4, 2 ])