// Using the JavaScript language, have the function ArrayMatching(strArr) read the array of strings stored in strArr 
// which will contain only two elements, both of which will represent an array of positive integers. For example: if 
// strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer arrays, and your 
// goal for this challenge is to add the elements in corresponding locations from both arrays. For the example input, 
// your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. 
// Your program should finally return this resulting array in a string format with each element separated by a hyphen: 
// 6-4-13-17. 

// If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new
// array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will 
// exist in each array. 


// Sample Test Cases

// Input:"[5, 2, 3]", "[2, 2, 3, 10, 6]"
// Output:"7-4-6-10-6"

// Input:"[1, 2, 1]", "[2, 1, 5, 2]"
// Output:"3-3-6-2"



function ArrayMatching(strArr) { 
	var array = [];
	strArr.forEach(el => array.push(JSON.parse(el)))
  var answer = [];
	for (var i = 0; i < array[0].length; i++) {
		if (array[1][i]){
			answer.push(array[0][i] + array[1][i]);
		} else {
			answer.push(array[0][i])
		}

	}
	if (array[1].length > array[0].length){
		for (var j = array[0].length; j < array[1].length; j++){
			answer.push(array[1][j])
		}
	}
	strArr = answer.join('-')
  // code goes here  
  return strArr; 
         
}


console.log(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]))