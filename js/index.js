// Iteration 1: Names and Input
let hacker1 = 'felipe'

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'dan'

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let newDriverName = hacker1.toUpperCase().split('').join(' ');
console.log(newDriverName);

let newNavigatorName = hacker2.split('').reverse().join('');
console.log(newNavigatorName);

const compareFirstLetter = hacker1.localeCompare(hacker2)

if (compareFirstLetter < 0) {
  console.log(`The driver's name goes first.`)
} else if (compareFirstLetter > 0) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {`What?! You both have the same name?`}
