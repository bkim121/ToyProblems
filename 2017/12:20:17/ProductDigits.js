// Using the JavaScript language, have the function ProductDigits(num) take the num parameter being passed which will be a positive integer, and
// determine the least amount of digits you need to multiply to produce it. For example: if num is 24 then you can multiply 8 by 3 which produces
// 24, so your program should return 2 because there is a total of only 2 digits that are needed. Another example: if num is 90, you can multiply
// 10 * 9, so in this case your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication.


// Sample Test Cases

// Input:6
// Output:2

// Input:23
// Output:3

function ProductDigits(num) {
  var count;
  for (var i = 0;  i < num + 1; i++){
    for (var j = 0; j < (num + 1) / 2; j++){
      console.log(i)
      if (i * j === num){
        if (count === undefined){
          count = i.toString().length + j.toString().length
        } else {
          var check = i.toString().length + j.toString().length
          if (check < count){
            count = check;
          }
        }
      }
    }
  }
  // code goes here
  return count;

}

console.log(ProductDigits(45))