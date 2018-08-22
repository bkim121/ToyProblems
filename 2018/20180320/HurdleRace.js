// Dan is playing a video game in which his character competes in a hurdle race by jumping over  hurdles with heights . He can initially jump a maximum height of  units, but he has an unlimited supply of magic beverages that help him jump higher! Dan can drink any number magic beverages and the maximum height he can jump during the entire race increases by the number of magic beverages he drink.

// Given , , and the heights of all the hurdles, find and print the minimum number of magic beverages Dan must drink to complete the race.


// Input Format

// The first line contains two space-separated integers describing the respective values of  (the number of hurdles) and  (the maximum height he can jump without consuming any beverages).
// The second line contains  space-separated integers describing the respective values of .


// Output Format

// Print an integer denoting the minimum number of magic beverages Dan must drink to complete the hurdle race.


// Sample Input 0

// 5 4
// 1 6 3 5 2


// Sample Output 0

// 2


function hurdleRace(k, height) {
  // Complete this function
  var high = 0;
  for (var i = 0; i < height.length; i++){
    if (height[i] > high){
      high = height[i]
    }
  }
  if (k >= high){
    return 0
  } else {
    return (high - k)
  }
}

console.log(hurdleRace(4, [ 1, 6, 3, 5, 2 ]))