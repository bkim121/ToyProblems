// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

// For example, there are  prisoners and  pieces of candy. The prisoners arrange themselves in seats numbered  to . A two is drawn from the hat. Prisoners receive candy at positions . The prisoner to be warned sits in chair number .


// Input Format

// The first line contains an integer, , denoting the number of test cases.
// The next  lines each contain  space-separated integers:
// - : the number of prisoners
// - : the number of sweets
// - : the chair number to start passing out treats at


// Output Format

// For each test case, print the chair number of the prisoner who receives the awful treat on a new line.


// Sample Input

// 2
// 5 2 1
// 5 2 2


// Sample Output

// 2
// 3



function saveThePrisoner(n, m, s){
  // Complete this function
  var remainder = (m - Math.floor(m / n) * n)
  if ((s + remainder - 1) > n){
    return (s + remainder - 1 - n)
  } else if ((s + remainder - 1) === 0){
    return (s + remainder - 1 + n)
  } else {
    return (s + remainder - 1)
  }
}


console.log(saveThePrisoner(13, 140874526, 1))
