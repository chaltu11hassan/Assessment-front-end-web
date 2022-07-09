console.log("hello world");



function handleSubmit(event) {
	event.preventDefault();
	
	// console.log('form submit');

	// Change the event listener that is listening for the Contact Us form to submit. Instead of doing a console.log message on submit, the form should alert the user that the form has been submitted successfully. Use the alert function in Javascript.
	alert('submitted successfully')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


// Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page should alert give the user a compliment.

const catPhoto = document.querySelector('img')

catPhoto.addEventListener('mouseover', () => {
	alert("you're a mice-eater")
})
