const fish = {
     name: 'king Hilsa',
     address: 'Saspur',
     color: 'silver',
     phone: '0148714544',
     price: 4000
}

// const phone = fish.phone;
// const color = fish.phone;
// const price = fish.phone;
const {phone} =fish;
const {color, price} = fish;
// console.log(phone)
// console.log(color)
// console.log(price)

//arry desturctuing
const [first, another] = [44, 99, 88, 456];
// 

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
// console.log(notun)

//function desturctuing
function name(){
     return ['alim', 'halim']
}
const [baba, chacha] = name();
console.log(baba)

