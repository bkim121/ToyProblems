// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given  queries in the form of , , and  representing the respective positions for cats  and , and for mouse . Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.


// Input Format

// The first line contains a single integer, , denoting the number of queries.
// Each of the  subsequent lines contains three space-separated integers describing the respective values of (cat 's location),  (cat 's location), and  (mouse 's location).


// Output Format

// For each query, return Cat A if cat  catches the mouse first, Cat B if cat  catches the mouse first, or Mouse C if the mouse escapes.

// Sample Input

// 2
// 1 2 3
// 1 3 2


// Sample Output

// Cat B
// Mouse C



function catAndMouse(x, y, z) {
  var distanceA = (z - x)
  var distanceB = (z - y)
  if (distanceA < 0){
    distanceA = distanceA * -1
  }
  if (distanceB < 0){
    distanceB = distanceB * -1
  }
  if (distanceA < distanceB){
    return 'Cat A'
  } else if (distanceA > distanceB){
    return 'Cat B'
  } else {
    return 'Mouse C'
  }
}