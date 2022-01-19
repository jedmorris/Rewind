
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
	revString = "";

	for (let i = userString.length -1; i >= 0; i--) {
		revString += userString[i];
	}
	return revString;
}

function displayData(revString) {

}