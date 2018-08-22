// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e.: .
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, .
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, the .
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of .
// Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be .


// Input Format

// The first line contains  space-separated integers denoting the respective , , and  on which the book was returned.
// The second line contains  space-separated integers denoting the respective , , and  on which the book was due to be returned.


// Output Format

// Print a single integer denoting the library fine for the book received as input.


// Sample Input

// 9 6 2015
// 6 6 2015


// Sample Output

// 45

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Complete this function
  if (y1 > y2){
    return 10000
  } else if (y2 > y1){
    return 0
  }
  var fee = 0
  if ((m2 > m1) || ((m2 === m1) && (d2 > d1))){
    return 0
  }
  if ((m1 - m2) >= 6){
    return (m1 - m2) * 500
  }
  if (m1 > m2){
    fee = fee + (m1 - m2) * 500
  }
  if (d1 > d2){
    fee = fee + ((d1 - d2) * 15)
  }
  if (fee >= 3000){
    return 3000
  } else {
    return fee
  }
}

console.log(libraryFine(2, 7, 1014, 1, 1, 1014))

console.log(libraryFine(28, 2, 2015, 15, 4, 2015))

console.log(libraryFine(31, 8, 2004, 20, 1, 2004))