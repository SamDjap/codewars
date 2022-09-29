// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  if(current === 'green'){
    return 'yellow'
  } else if(current === 'yellow'){
    return 'red'
  } else if(current === 'red'){
    return 'green'
  }
}

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if(month < 4 && month > 0){
    return 1
  } else if(month > 3 && month < 7){
    return 2
  } else if(month > 6 && month < 10){
    return 3
  }else if(month > 9 && month < 13){
    return 4
  }
}