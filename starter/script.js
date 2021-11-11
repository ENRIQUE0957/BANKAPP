'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const displayMovements = function(movements){
  containerMovements.innerHTML = '';
movements.forEach(function(value,key){
  
  const deposit = value > 0 ? 'deposit':'withdrawal'
  const html = `
              <div class="movements__row">
              <div class="movements__type movements__type--${deposit}">
              ${key+1} ${deposit}</div>
             <div class="movements__value">${value}</div>
                </div>`
     containerMovements.insertAdjacentHTML('afterbegin',html)
      
})
}
displayMovements(account1.movements)

//coding chanllenge for arrays 
//TEST DATA 1: Julias data [3,5,2,12,7], Kate's data [4,1,15,8,3]
const juliasData = [3,5,2,12,7]
const JuliasDataCorrected = juliasData.slice(1,3)
const katesData = [4,1,15,8,3]
const checkDogs = function([array]){
  array.forEach(function(value,key){
    if(value > 3){
      console.log(`Dog number ${key+1} is an Adult and is ${value} yearls old!`)
    }else{
      console.log(`Dog number ${key+1} is a puppy still and is ${value} yearls old!`)
    }
  })
}
checkDogs([katesData],[JuliasDataCorrected])
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const arr = ['a','b','c','d','e']
console.log(arr.slice(2,4))
//shallow copy of an array
console.log(arr.slice)

//splice method
//console.log(arr.splice(2))
console.log(arr.splice(2,4))

//reverse method
const arr1 = ['a','b','c','d','e']
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse())
console.log(arr2)

//CONCAT

const letters = arr1.concat(arr2)
console.log(letters)
//you could also use the spread operator fyi both do not mutate the original object
console.log([...arr1,...arr2])

//join
console.log(letters.join('+'))
console.log(letters)

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//looping over array using for loop
for(const [i,movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i+1} you desposuted ${movement}`)
  }else{
    console.log(`you widreew ${Math.abs(movement)}`)
  }
}

//using the for each loop

movements.forEach(function(movement,index,array){
  if(movement > 0){
    console.log(`Movement ${index+1} you desposuted ${movement}`)
  }else{
    console.log(`you widreew ${Math.abs(movement)}`)
  }
})
//example of how for each loop iterates through elements;
//0:function(element1);
//1;function(element2);
//3;function(element3)
//4:function(element4);
///...etcccccc

/*const weekday = ['monday','tuesday','wenesday','thursday','friday','saturday'];
weekday.forEach(function(day,i){
  if(day ==='monday' || day === 'thursday'){
    console.log(`on day ${i+1} for the day ${day} we train chest`)
  }else if(day === 'wenesday'|| day=== 'saturday'){
    console.log(console.log(`on day ${i+1} for the day ${day} we train legs`))
  }else{
    console.log(console.log(`on day ${i+1} for the day ${day} we train back`))
  }
})*/

//FOR EACH LOOP WITH A MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`)
})

//FOR EACH FOR A SET
const currrenciesUnique = new Set(['USD','GPB','USD','EUR','EUR'])
currrenciesUnique.forEach(function(value,key,map){
  console.log(`${key}: ${value}`)
})
 
const simpleArray = ['a','b','c','d','e']
console.log(simpleArray.slice(3))
console.log(simpleArray)
console.log(simpleArray.slice(2,4))
/*creating a shallow copy of an array*/
console.log(simpleArray.slice())
console.log([...simpleArray])

//splice
/*console.log(simpleArray.splice(2))*/
/*main diffrence betweeen splice and slice is that splice mutates the original array and slice does not not it creaeted a new instace*/
/*main diffrence bewteen splice and slice too is the second argument that comes with both of these.*/
/*CONCAT METHOD or spread opertaor both of these do not chnage original array*/
/*reverse method */
console.log(simpleArray.join('123'))
const cryptos = ['ADA','BTC','ETH','SOL']
for(const alt of cryptos){
  if(alt != 'ADA'){
    console.log(`${alt} is not goin to the moon `)
  }else{
    console.log(`we going to the moon baby${alt}`)
  }
}

/*for EACH loop which requires a function inside the loop to tell it what to do*/
/*this is also called a higher order-function a fucntion that return a function*/

cryptos.forEach(function(alt){
  if(alt != 'ADA'){
    console.log(`${alt} is not goin to the moon `)
  }else{
    console.log(`we going to the moon baby${alt}`)
  }
})