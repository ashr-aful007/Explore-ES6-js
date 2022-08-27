const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const tiny = numbers.filter(numbers => numbers < 10);
const large = numbers.filter(n => n < 20);
// console.log(tiny)
// console.log(large);
const even = numbers.filter(n => n % 2 === 0);
console.log(even)