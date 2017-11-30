// Using the JavaScript language, have the function OtherProducts(arr) take the array of numbers stored in arr and 
// return a new list of the products of all the other numbers in the array for each element. For example: if arr is 
// [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is 
// [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), 
// (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 
// 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers.  


//Sample Test Cases

// Input:1,4,3
// Output:"12-3-4"

// Input:3,1,2,6
// Output:"12-36-18-6"

function OtherProducts(arr) { 
  var current = 0;
  var answer = [];  
  var helper = (array) => {
  	if (array[current] !== undefined){
      var number;
      for (var i = 0; i < array.length; i++){
        if (current !== i) {
          if (number === undefined){
            number = array[i];
          } else {
            number = number * array[i]
          }
        }
      }
      answer.push(number)
      current++;
      helper(array);
    }
  }
  helper(arr)
  answer = answer.join('-')
  return answer;       
}

console.log(OtherProducts([1, 2, 3, 4, 5]))