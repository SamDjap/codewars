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

//  Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10){
      return 100
    } else if(exam > 75 && projects >= 5){
      return 90
    } else if(exam > 50 && projects >=2){
      return 75
    } else{
      return 0
    }
  }