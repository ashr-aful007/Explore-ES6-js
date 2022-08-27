const users = [
     {id: 1, name:'abul', job:'doctor'}
]

// console.log(users[0].name);

const data ={ 
     count: 500,
     data: [
          {id: 1, name:'babul', job: 'leader'},
          {id: 2, name:'dabul', job: 'leader'},
     ]

}

const firstJob = data.data[0].job;
// console.log(firstJob);

//optonal chaning
const user = {
     id: 5001,
     name: 'thomas alba edison',
     address:{
          street:'35/A kochukhet laione'
     },
          postoffice: 'cantonment',
          city: 'Dhaka'     
}

const number = user?.addres?.street;
// console.log(number)

//
