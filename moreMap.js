const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2)
const thirds = numbers.map(x => x/3)

// console.log(thirds)

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Bardy', 'Tom Solaiman'];
const friendsLetter =  friends.map(friend => friend[0]);
// console.log(friendsLetter)

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths)

//access all value use map
const products = [
     {id:1, name: 'laptop', price: 4500},
     {id: 2, name: 'watch', price: 511565},
     {id: 3, name: 'table', price: 35000},
     {id:4, name: 'tablat', price: 2300},
];

const items = products.map(product => product.name);
// console.log(items);
const price = products.map(product => product.price);
console.log(price)
