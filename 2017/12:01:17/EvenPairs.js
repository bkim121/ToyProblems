// Using the JavaScript language, have the function EvenPairs(str) take the str parameter being passed and determine if
// a pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the string true, otherwise return
// false. For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your
// program should return the string true. Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your
// program should return the string true. 


// Sample Test Cases

// Input:"3gy41d216"
// Output:"true"

// Input:"f09r27i8e67"
// Output:"false"

function EvenPairs(str) { 
  var split = str.split('');
  var checkNumber = char => {
  	var number = '0123456789'
  	for (var j = 0; j < number.length; j++){
  		if (char === number[j]){
  			return true;
  		}
  	}
  	return false;
  }
  var check = str => {
  	for (var k = 1; k < str.length; k++){
  		var first = Number(str.substr(0, k))
  		var second = Number(str.substr(k, str.length))
  		if ((first % 2) === 0 && (second % 2) === 0){
  			return true;
  		}
  	}
  	return false;
  }
  var number = ''
  for (var i = 0; i < split.length; i++) {
  	if (checkNumber(split[i])) {
      number = number + split[i]
      if (i === split.length - 1 && check(number)){
      	return true;
      }
  	} else {
  		if (check(number)){
  			return true;
  		}
  		number = ''
  	} 
  }
  return false;
}

console.log(EvenPairs("f09r27i8e67"))