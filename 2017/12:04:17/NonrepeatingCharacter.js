// Using the JavaScript language, have the function NonrepeatingCharacter(str) take the str parameter being passed,
// which will contain only alphabetic characters and spaces, and return the first non-repeating character. For
// example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one
// character and there will always be at least one non-repeating character.


// Sample Test Cases

// Input:"abcdef"
// Output:"a"

// Input:"hello world hi hey"
// Output:"w"


function NonrepeatingCharacter(str) {
  var check = (string, place) => {
  	for (var j = 0; j < string.length; j++){
  		if (string[place] === string[j] && place !== j){
  			return false;
  		}
  	}
  	return true;
  }
  for (var i = 0; i < str.length; i++){
  	if (check(str, i)){
  		return str[i]
  	}
  }
  return str[0]
}

console.log(NonrepeatingCharacter("hello world hi hey"))