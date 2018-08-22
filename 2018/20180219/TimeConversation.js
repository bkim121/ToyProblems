// Given a time in -hour AM/PM format, convert it to military (-hour) time.

// Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.


// Input Format

// A single string containing a time in -hour clock format (i.e.:  or ), where  and .


// Output Format

// Convert and print the given time in -hour format, where .


// Sample Input

// 07:05:45PM


// Sample Output

// 19:05:45


function timeConversion(s) {
  // Complete this function
  var split = s.split('')
  if (split[8] === 'P'){
    if (!(split[0] === '1' && split[1] === '2')){
      split[0] = (Number(s[0]) + 1);
      split[1] = (Number(s[1]) + 2);
    }
  } else if (split[8] === 'A'){
    if (split[0] === '1' && split[1] === '2'){
      split[0] = '0';
      split[1] = '0';
    }
  }
  split.splice(8, 2)
  return split.join('')
}

console.log(timeConversion('11:05:45PM'))


// function timeConversion(s) {
//   // Complete this function
//   var split = s.split('')
//   if (split[8] === 'P'){
//     split[0] = (Number(s[0]) + 1).toString();
//     split[1] = (Number(s[1]) + 2).toString();
//   }
//   split.splice(8, 2)
//   return split.join('')
// }

// console.log(timeConversion('12:05:45PM'))