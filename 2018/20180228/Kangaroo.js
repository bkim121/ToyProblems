// There are two kangaroos on a number line ready to jump in the positive direction (i.e, toward ). Each kangaroo takes the same amount of time to make a jump, regardless of distance. That is, if kangaroo one jumps 3 meters and kangaroo two jumps 5 meters, they each do it in one second, for example.

// Given the starting locations and jump distances for each kangaroo, determine if and when they will land at the same location at the same time.


// Input Format

// A single line of four space-separated integers denoting the respective values of , , , and .


// Output Format

// Print YES if they can land on the same location at the same time; otherwise, print NO.

// Note: The two kangaroos must land at the same location after making the same number of jumps.


// Sample Input

// 0 3 4 2


// Sample Output

// YES


function kangaroo(x1, v1, x2, v2) {
  // Complete this function
  var first = x1;
  var second = x2;
  if (v1 <= v2) {
    return 'NO'
  }
  while (first <= second){
    first = first + v1;
    second = second + v2;
    if (first === second) {
      return 'YES'
    }
  }
  return 'NO'
}


console.log(kangaroo(0, 2, 5, 3))


