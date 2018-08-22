// Water Blocks

// You are given an input array where each element represents the height of a line of towers.


// The width of every tower is 1.
// It starts raining. How much water is collected between the towers?


// Eg. Input: [5, 2, 3, 2, 1, 3]
// Output: 4
// Visualization:

// '-' is water
//  '#' is a block

// #
// #
// # - # -  - #
// # # # # - #
// # # # # # #


// Remember the rules of how to answer technical prompts. Try and go from a working naive solution to a working ideal solution.


var waterBlocks = function (blocks) {
  // TODO: Implement
  var current;
  var next;
  var water = 0;
  for (var i = 0; i < blocks.length; i++){
    if (blocks[i] > blocks[i + 1] && (current === undefined)){
      current = i;
      next = i + 1;
    }
  }
  for (var i = next + 1; i < blocks.length; i++){
    if (blocks[i] > blocks[next]){
      next = i
    } else if (blocks[i] === blocks[next]){
      var lower = next
      for (var x = next; x < i; x++){
        water = water + (blocks[lower] - blocks[x]);
      }
      current = next;
      next = current + 1
    } else if (i === (blocks.length - 1)){
      if (blocks[i] > blocks[next]){
        var lower = next;
      } else {
        var lower = i;
      }
      for (var x = next + 1; x < i; x++){
        water = water + (blocks[lower] - blocks[x]);
      }
    } else if (blocks[i] < blocks[next]){
      if (blocks[current] > blocks[next]){
        var lower = next;
      } else {
        var lower = current;
      }
      for (var x = current + 1; x < next; x++){
        water = water + (blocks[lower] - blocks[x]);
      }
      current = next;
      next = current
    }
  }
  return water
};


console.log(waterBlocks([5, 2, 4, 2, 1, 3]))