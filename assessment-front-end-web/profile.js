// 1. grab the element we want to manipulate
// 2. build our callback function to determine our action
// 3. combine both using addEventListener

console.log('Welcome to my profile!')

// create event listeners that check for a click on each of these buttons.
// If a user clicks on “My Favorite Color”, it should alert the user of your favorite color, and so on.

const myFaveColorBtn = document.querySelector('#color')
const myFavePlaceBtn = document.querySelector('#place')
const myFaveRitualBtn = document.querySelector('#ritual')

myFaveColorBtn.addEventListener('click', () => {
	alert("This is my favorite color")
})

myFavePlaceBtn.addEventListener('click', () => {
	alert("This is my favorite place")
})

myFaveRitualBtn.addEventListener('click', () => {
	alert("This is my favorite ritual")
})