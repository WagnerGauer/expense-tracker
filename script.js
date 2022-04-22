
// const balance = document.querySelector('#balance')
// const moneyPlus = document.querySelector('#money-plus')
// const moneyMinus = document.querySelector('#money-minus')
// const list = document.querySelector('#list')
// const form = document.querySelector('#form')
// const text = document.querySelector('#text')
// const amount = document.querySelector('#amount')

// const dummyTransactions = [ { id: 1, text: 'Flower', amount: -20},
//     { id: 1, text: 'Flower', amount: -20},
//      { id: 2, text: 'Salary', amount: 300},
//     { id: 3, text: 'Book', amount: -20},
//     { id: 4, text: 'Camera', amount: -20},
// ]

// let transactions = dummyTransactions;

// form.addEventListener('submit', (e) => {
//     console.log(e)
// })



// // ADD TRANSACTION TO DOM 
// function addTransationDOM(transaction) {
//     console.log(transaction)
//     // Get sign 
//     const sign = transaction.amount < 0 ? '-' : '+';

//     const item = document.createElement('li');

//     // Add class based on value 
//     item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

//     item.innerHTML = `
//     ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}
//     </span> <button class="delete-btn">x</button>   
//     `;

//     list.appendChild(item);

// }

// // Init app 

// function init() {
//     list.innerHTML = ''

//     transactions.forEach(addTransationDOM);
// }

// init();