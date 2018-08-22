// Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is .


// Input Format

// The first line contains a single integer, , denoting the size of the array.
// The second line contains  space-separated integers describing the respective values of .


// Output Format

// A single integer denoting the maximum number of integers you can choose from the array such that the absolute difference between any two of the chosen integers is .


// Sample Input

// 6
// 4 6 5 3 3 1


// Sample Output

// 3


function pickingNumbers(a) {
  var obj = {};
  for (var i = 0; i < a.length; i++){
    if (obj[a[i]] === undefined){
      obj[a[i]] = 1;
    } else {
      obj[a[i]] = obj[a[i]] + 1
    }
  }
  var max = 0;
  var current = [];
  for (var x in obj){
    if (obj[x] > max){
      max = obj[x]
      current = [x]
    } else if (obj[x] === max){
      current.push(x)
    }
  }
  var largest = 0;
  for (var y in obj){
    var top = 0;
    var bottom = 0;
    if (obj[(Number(y)-1)] !== undefined){
      top = obj[(Number(y)-1)] + obj[y]
    }
    if (obj[(Number(y)+1)] !== undefined){
      bottom = obj[(Number(y)+1)] + obj[y]
    }
    if (top > bottom){
      if (largest < top){
        largest = top
      }
    } else {
      if (largest < bottom){
        largest = bottom
      }
    }
  }
  if (largest > 0 && largest > obj[current[0]]){
    return largest
  } else {
    return obj[current[0]]
  }
}

console.log(pickingNumbers([ 4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]))