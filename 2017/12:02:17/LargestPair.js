// Using the JavaScript language, have the function LargestPair(num) take the num parameter being passed and 
// determine the largest double digit number within the whole number. For example: if num is 4759472 then your
// program should return 94 because that is the largest double digit number. The input will always contain at
// least two positive digits. 


// Sample Test Cases

// Input:453857
// Output:85

// Input:363223311
// Output:63

function LargestPair(num) { 
	var string = num.toString();
	var large;
	for (var i = 0; i < string.length - 1; i++){
    if (large === undefined){
    	large = Number(string[i] + string[i+1])
    } else {
    	if (Number(string[i] + string[i+1]) > large){
    		large = Number(string[i] + string[i+1])
    	}
    }
	}
  // code goes here  
  return large; 
         
}

console.log(LargestPair(453857))