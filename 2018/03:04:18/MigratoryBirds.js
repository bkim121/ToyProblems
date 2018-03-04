// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.


// Input Format

// The first line contains an integer denoting , the number of birds sighted and reported in the array .
// The second line describes  as  space-separated integers representing the type numbers of each bird sighted.


// Output Format

// Print the type number of the most common bird; if two or more types of birds are equally common, choose the type with the smallest ID number.



// Sample Input

// 6
// 1 4 4 4 5 3


// Sample Output

// 4



function migratoryBirds(n, ar) {
  // Complete this function
  var most = 0;
  var answer = 0
  var object = {}
  for (var i = 0; i < ar.length; i++){
    if (!object[ar[i]]){
      var count = 1;
      for (var j = i + 1; j < ar.length; j++){
        if (ar[j] === ar[i]){
          count++;
        }
      }
      object[ar[i]] = count
      if (most < count){
        most = count;
        answer = ar[i]
      }
    }
  }
  var array = [];
  for (var x in object){
    if (object[x] === most){
      array.push(Number(x))
    }
  }
  return Math.min.apply(null, array)
}

console.log(migratoryBirds(6, [ 1, 4, 4, 4, 5, 3 ]))