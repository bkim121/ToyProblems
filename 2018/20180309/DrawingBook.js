// Brie’s Drawing teacher asks her class to open their -page book to page number . Brie can either start turning pages from the front of the book (i.e., page number ) or from the back of the book (i.e., page number ), and she always turns pages one-by-one (as opposed to skipping through multiple pages at once). When she opens the book, page  is always on the right side:

// image

// Each page in the book has two sides, front and back, except for the last page which may only have a front side depending on the total number of pages of the book (see the Explanation sections below for additional diagrams).

// Given  and , find and print the minimum number of pages Brie must turn in order to arrive at page .

// Input Format

// The first line contains an integer, , denoting the number of pages in the book.
// The second line contains an integer, , denoting the page that Brie's teacher wants her to turn to.

// Constraints

// Output Format

// Print an integer denoting the minimum number of pages Brie must turn to get to page .

// Sample Input 0

// 6
// 2
// Sample Output 0

// 1


function solve(n, p){
  // Complete this function
  var front = (Math.floor(p / 2));
  var back = (Math.floor(n / 2) - front);
  if (front > back){
    return back
  } else {
    return front
  }
}


console.log(solve(6, 2))