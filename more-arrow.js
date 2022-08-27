const add=(first, second) => first + second;
const getFullName = (first, last) => first + ' '+last;
const multiply = (a, b) => a * b;
const result = multiply(7, 8);
// console.log(result)

const addAll = (a,b, c, d, e, f) => a + b+ c+ d+ e+ f;

//no parameter arrow function 
const getPie = () => 3.14;
// console.log(getPie)

// one paremeter arrow function
const doulbelt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

//multi line arrow function
//if you want to return something , use the return 
const doMath = (x, y, z) => {
     const firstsum = x + y;
     const secondSum = y + z;
     const multiplyResult = firstsum * secondSum;
     const result = multiplyResult / 2;
     return result;
}

//max number
const max = Math.max(12, 86, 999, 78);
// console.log(max)

//Spread operator
const numbers = [12, 85, 999, 78];
const larget = Math.max(...numbers);
// console.log(larget)

const number2 = [...numbers];
numbers.push(55);
number2.push(7777)

const numbers3 = [...numbers];
const numbers4 = [444, 78, ...numbers, 111];

console.log(numbers4)

// console.log(numbers);
// console.log(number2);