// When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:


// In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are wide.


// Input Format

// The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z].
// The second line contains a single word, consisting of lowercase English alphabetic letters.


// Output Format

// Print a single integer denoting the area in  of highlighted rectangle when the given word is selected. Do not print units of measure.


// Sample Input

// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc


// Sample Output

// 9


function designerPdfViewer(h, word) {
  // Complete this function
  var alpha = 'abcdefghijklmnopqrstuvwxyz'
  var obj = {};
  for (var i = 0; i < alpha.length; i++){
    obj[alpha[i]] = h[i]
  }
  max = 0;
  for (var j = 0; j < word.length; j++){
    if (obj[word[j]] > max){
      max = obj[word[j]]
    }
  }
  return (max * word.length);
}

console.log(designerPdfViewer([ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], 'abc'))