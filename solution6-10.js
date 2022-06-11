// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }


//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let arr = numbers.split(' ').map(x => parseInt(x)).sort((a,b) => a-b)
    return `${arr[arr.length - 1]} ${arr[0]}`
  }