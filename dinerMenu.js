
const prices = {
    
  'hamburger': '4.00',
  'hotdog': '3.50',
  'sandwich': '4.00',
  
  
  'chips': '2.00',
  'fries': '2.50',
  'tots': '2.75',
};


const pickMeal = prompt('Hello, please choose your meal: Hamburger, Hotdog, or Sandwich.');

if (pickMeal === 'hamburger') {
  alert(`Your hamburger is $${prices.hamburger}`)
}   else if (pickMeal === 'hotdog') {
  alert(`Your hotdog is $${prices.hotdog}`)
}   else if (pickMeal === 'sandwich') {
  alert(`Your sandwich is $${prices.sandwich}`)
}    


const pickOne = prompt('Please choose one side: Chips, Fries, or Tots');

if (pickOne === 'chips') {
  alert(`Your chips are $${prices.chips}`)
}   else if (pickOne === 'fries') {
  alert(`Your fries are $${prices.fries}`)
}   else if (pickOne === 'tots') {
  alert(`Your tots are $${prices.tots}`)
}



const pickTwo = prompt('Please choose another side: Chips, Fries, or Tots');

if (pickTwo === 'chips') {
  alert(`Your chips are $${prices.chips}`)
}   else if (pickTwo === 'fries') {
  alert(`Your fries are $${prices.fries}`)
}   else if (pickTwo === 'tots') {
  alert(`Your tots are $${prices.tots}`)
}

const cost = prompt('Thank you for dining in.  Would you like your ticket?')

const mainMeal = pickMeal
const sideOne = pickOne
const sideTwo = pickTwo

const total = parseFloat(prices[mainMeal]) + parseFloat(prices[sideOne]) + parseFloat(prices[sideTwo])


if (cost === 'yes') {
  alert(`Your total is ${total}. See you next time! :)`)
} else if (cost === 'no') {
  alert('Sure, take your time. :)')
};
