
// pull user entered string from page
function getValues() {
	let userString = document.getElementById("revString").value.length

	// call reverseString
	let revString = reverseString(userString);

	// call displayData
	displayData(revString);

	Swal.fire(
		'Button Clicked!',
		userMessage,
		'success!'
	)
}

function reverseString(userString) {

}

function displayData(revString) {

}