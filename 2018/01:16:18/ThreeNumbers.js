// Using the JavaScript language, have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique,
// single-digit integers occur within each word in the string. The integers can appear anywhere in the word, but they cannot be all adjacent to
// each other. If every word contains exactly 3 unique integers somewhere within it, then return the string true, otherwise return the string
// false. For example: if str is "2hell6o3 wor6l7d2" then your program should return "true" but if the string is "hell268o w6or2l4d" then your
// program should return "false" because all the integers are adjacent to each other in the first word.


// Sample Test Cases

// Input:"2a3b5 w1o2rl3d g1gg92"
// Output:"true"


// Input:"21aa3a ggg4g4g6ggg"
// Output:"false"


function ThreeNumbers(str) {
  var split = str.split(' ');

  var check = (input) => {
    var number = '0123456789'
    for (var i = 0; i < number.length; i++){
      if (input === number[i]){
        return true;
      }
    }
    return false;
  }

  var helper = (word) => {
    var array = [];
    var number = '';
    var separate = word.split('');
    for (var x = 0; x < separate.length; x++){
      if (check(separate[x])){
        number = number + separate[x]
      } else {
        if (number !== '') {
          array.push(number);
          number = ''
        }
      }
    }
    if (number !== ''){
      array.push(number)
    }
    if (array.length === 3){
      return true;
    } else {
      return false;
    }
  }

  for (var i = 0; i < split.length; i++) {
    if (!helper(split[i])){
      return false;
    }
  }
  return true;
}


console.log(ThreeNumbers("2hell6o3 wor6l7d2"))