// ● Write a code to convert celsius to fahrenheit.
let celcius = 25;
let fahrenheit = (celcius * 9) / 5 + 32;

console.log(`${celcius} celcius = ${fahrenheit} fahrenheit`);

// ● Write a code to check whether the number is odd or even
const number = 10;

number % 2 == 0
  ? console.log(`${number} adalah bilangan genap`)
  : console.log(`${number} adalah bilangan ganjil`);

// ● Write a code to check whether the number is prime number or not
let primeNmber = true;
if (number === 1 || number === 0) primeNmber = false;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    primeNmber = false;
  }
}
primeNmber
  ? console.log(`${number} is prime number`)
  : console.log(`${number} is not prime number`);

// ● Write a code to find the sum of the numbers 1 to N.
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
let sum = 0;
let text = `${number} ->`;
for (let i = 1; i <= number; i++) {
  console.log(i);
  i == 1 ? (text += `${i}`) : (text += `+${i}`);
  sum += i;
}
console.log(`${text} = ${sum}`);
// ● Write a code to find factorial of a number.
// ● Write a code to print the first N fibonacci numbers

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
