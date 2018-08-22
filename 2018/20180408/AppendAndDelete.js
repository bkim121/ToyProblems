// You have a string, , of lowercase English alphabetic letters. You can perform two types of operations on :

// Append a lowercase English alphabetic letter to the end of the string.
// Delete the last character in the string. Performing this operation on an empty string results in an empty string.
// Given an integer, , and two strings,  and , determine whether or not you can convert  to  by performing exactly  of the above operations on . If it's possible, print Yes; otherwise, print No.


// Input Format

// The first line contains a string, , denoting the initial string.
// The second line contains a string, , denoting the desired final string. The third line contains an integer, , denoting the desired number of operations.


// Output Format

// Print Yes if you can obtain string  by performing exactly  operations on ; otherwise, print No.


// Sample Input

// hackerhappy
// hackerrank
// 9


// Sample Output

// Yes


function appendAndDelete(s, t, k) {
  // Complete this function
  var first = s.length;
  var second = t.length;
  if (first + second <= k){
    return 'Yes'
  }
  var same = 0;
  var current = true
  for (var i = 0; i < s.length; i++){
    if ((s[i] === t[i]) && current){
      same++;
    } else {
      current = false;
    }
  }
  if (((second - same) + (first - same)) === k){
    return 'Yes'
  } else if (((((k - (first - second)) % 2) === 0) && (first - second) > 0) || ((((k - (second - first)) % 2) === 0) && (second - first) > 0)){
    return 'Yes'
  } else if ((first === same) && (second === same) && ((k % 2) === 0)){
    return 'Yes'
  }
  return 'No'
}

console.log(appendAndDelete('hackerhappy', 'hackerrank', 9))

console.log(appendAndDelete('ada', 'ada', 7))

console.log(appendAndDelete('aaaaaaaaaa', 'aaaaa', 7))

console.log(appendAndDelete('ashley', 'ash', 2))

console.log(appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 20))