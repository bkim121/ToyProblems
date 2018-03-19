// Alice is playing an arcade game and wants to climb to the top of the leaderboard. Can you help her track her ranking as she beats each level? The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number  on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
// For example, four players have the scores , , , and . Those players will have ranks , , , and , respectively.

// When Alice starts playing, there are already  people on the leaderboard. The score of each player is denoted by . Alice plays for  levels, and we denote her total score after passing each level  as . After completing each level, Alice wants to know her current rank.

// You are given an array, , of monotonically decreasing leaderboard scores, and another array, , of Alice's cumulative scores for each level of the game. You must print  integers. The integer should indicate the current rank of alice after passing the  level.

// Input Format

// The first line contains an integer, , denoting the number of players already on the leaderboard.
// The next line contains  space-separated integers describing the respective values of .
// The next line contains an integer, , denoting the number of levels Alice beats.
// The last line contains  space-separated integers describing the respective values of .

// Constraints

//  for
//  for
// The existing leaderboard, , is in descending order.
// Alice's scores are cumulative, so  is in ascending order.
// Subtask

// For  of the maximum score:

// Output Format

// Print  integers. The  integer should indicate the rank of alice after passing the  level.

// Sample Input 0

// 7
// 100 100 50 40 40 20 10
// 4
// 5 25 50 120
// Sample Output 0

// 6
// 4
// 2
// 1


function climbingLeaderboard(scores, alice) {
  // Complete this function
  var array = [];
  for (var k = 0; k < scores.length; k++){
    if (array.indexOf(scores[k]) === -1){
      array.push(scores[k])
    }
  }
  for (var i = 0; i < alice.length; i++){
    var found = false;
    for (var j = array.length; j >= 0; j--){
      if (!found && (array[j] > alice[i])){
        console.log(j + 2)
        found = true;
      }
    }
    if (!found){
      console.log(1)
    }
  }
}

climbingLeaderboard([ 100, 100, 50, 40, 40, 20, 10 ], [ 5, 25, 50, 120 ])




