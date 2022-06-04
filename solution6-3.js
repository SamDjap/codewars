// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health > damage ? health - damage : 0
  }



//   Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
    let result = array.reduce((a,c) => a+c,0)
    return result%2 === 0 || result===0 ? 'even' : 'odd'
 
 }