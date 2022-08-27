const number = [12, 14, 15, 50, 80, 90];
const big = number.find(n => n > 80);
// console.log(big)
const products = [
     {id:1, name: 'laptop', price: 4500},
     {id: 2, name: 'watch', price: 511565},
     {id: 3, name: 'table', price: 35000},
     {id:4, name: 'tablat', price: 2300},
];
const cheap = products.find(p => p.price < 400000);
console.log(cheap)