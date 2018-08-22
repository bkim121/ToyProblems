// Anna and Brian order  items at a restaurant, but Anna declines to eat any of the  item (where ) due to an allergy. When the check comes, they decide to split the cost of all the items they shared; however, Brian may have forgotten that they didn't split the  item and accidentally charged Anna for it.

// You are given , , the cost of each of the  items, and the total amount of money that Brian charged Anna for her portion of the bill. If the bill is fairly split, print Bon Appetit; otherwise, print the amount of money that Brian must refund to Anna. It is guaranteed that the amount will always be an integer.


// Input Format

// The first line contains two space-separated integers denoting the respective values of  (the number of items ordered) and  (the -based index of the item that Anna did not eat).
// The second line contains  space-separated integers where each integer  denotes the cost, , of item (where ).
// The third line contains an integer, , denoting the amount of money that Brian charged Anna for her share of the bill.



// Output Format

// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., ) that Brian must refund to Anna (it is guaranteed that this will always be an integer).


// Sample Input 0

// 4 1
// 3 10 2 9
// 12


// Sample Output 0

// 5


var bonAppetit = (input) => {
  var split = input.split(' ')
  var array = [];
  for (var i = 0; i < split.length; i++){
    var splitting = split[i].split('\n')
    for (var j = 0; j < splitting.length; j++){
        array.push(splitting[j])
    }
  }
  var sum = 0
  var difference = 0
  for (var k = 2; k < array.length - 1; k++){
    if (k === (Number(array[1]) + 2)) {
        difference = Number(array[k])
    }
    sum = sum + Number(array[k])
  }
  if (((sum - difference) / 2) !== Number(array[array.length - 1])) {
    console.log(Number(array[array.length - 1]) - ((sum - difference) / 2))
  } else {
    console.log('Bon Appetit')
  }
}

bonAppetit('4 1\n3 10 2 9\n12')