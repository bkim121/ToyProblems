// Maria plays  games of college basketball in a season. Because she wants to go pro, she tracks her points scored per game sequentially in an array defined as . After each game , she checks to see if score  breaks her record for most or least points scored so far during that season.

// Given Maria's array of  for a season of  games, find and print the number of times she breaks her record for most and least points scored during the season.

// Note: Assume her records for most and least points at the start of the season are the number of points scored during the first game of the season.


// Input Format

// The first line contains an integer denoting  (the number of games).
// The second line contains  space-separated integers describing the respective values of .


// Output Format

// Print two space-seperated integers describing the respective numbers of times her best (highest) score increased and her worst (lowest) score decreased.


// Sample Input

// 9
// 10 5 20 20 4 5 2 25 1


// Sample Output

// 2 4


function breakingRecords(score) {
  // Complete this function
  console.log(score)
  var max = score[0];
  var min = score[0];
  var answer = [0, 0];
  for (var i = 1; i < score.length; i++){
    if (score[i] > max){
      max = score[i];
      answer[0] = answer[0] + 1;
    } else if (score[i] < min){
      min = score[i];
      answer[1] = answer[1] + 1;
    }
  }
  return answer
}


breakingRecords([ 10, 5, 20, 20, 4, 5, 2, 25, 1 ])