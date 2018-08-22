// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the  day of the year) during a year in the inclusive range from  to .

// From  to , Russia's official calendar was the Julian calendar; since  they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in , when the next day after January  was February . This means that in , February  was the  day of the year in Russia.

// In both calendar systems, February is the only month with a variable amount of days; it has  days during a leap year, and  days during all other years. In the Julian calendar, leap years are divisible by ; in the Gregorian calendar, leap years are either of the following:

// Given a year, , find the date of the  day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .


// Input Format

// A single integer denoting year .


// Output Format

// Print the full date of Day of the Programmer during year  in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .


// Sample Input

// 2017


// Sample Output

// 13.09.2017



function solve(year){
  // Complete this function
  if (year === 1918){
    return ('26.09.' + year)
  } else if (((year <= 1917) && (year % 4 === 0)) || ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
    return ('12.09.' + year)
  } else {
    return ('13.09.' + year)
  }
}

console.log(solve(1800))