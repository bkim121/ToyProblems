// Aerith is playing a cloud game! In this game, there are  clouds numbered sequentially from  to . Each cloud is either an ordinary cloud or a thundercloud.

// Aerith starts out on cloud  with energy level . She can use  unit of energy to make a jump of size  to cloud , and she jumps until she gets back to cloud . If Aerith lands on a thundercloud, her energy () decreases by  additional units. The game ends when Aerith lands back on cloud .

// Given the values of , , and the configuration of the clouds, can you determine the final value of  after the game ends?

// Note: Recall that  refers to the modulo operation.


// Input Format

// The first line contains two space-separated integers,  (the number of clouds) and  (the jump distance), respectively.
// The second line contains  space-separated integers describing the respective values of clouds . Each cloud is described as follows:

// If , then cloud  is an ordinary cloud.
// If , then cloud  is a thundercloud.


// Output Format

// Print the final value of  on a new line.


// Sample Input

// 8 2
// 0 0 1 0 0 1 1 0


// Sample Output

// 92

function jumpingOnClouds(c, k) {
  // Complete this function
  var energy = 100
  var current = k
  if (current === c.length){
    current = 0;
  }
  if (c[current] === 0){
    energy = energy - 1
  } else {
    energy = energy - 3
  }
  while(current !== 0){
    current = current + k;
    if (current > c.length - 1){
      current = current - c.length
    }
    if (c[current] === 0){
      energy = energy - 1
    } else {
      energy = energy - 3
    }
  }
  return energy
}

console.log(jumpingOnClouds([ 0, 0, 1, 0, 0, 1, 1, 0 ], 2))