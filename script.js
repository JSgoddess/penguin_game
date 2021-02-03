/*find the penguin game chapeter 11*/

//thisscript will run a function that will generate random number and the number will represent which div the yeti hides in. this div will get an id of yeti and also the click event listeners
// event listenr to run the game function when the page loads
window.addEventListener("load", newGame);

// click event listener on the play to restart the game
document.getElementById('button').addEventListener('click', function() {
	window.location.reload();
});

// function definition of the newGame() funtion
function newGame() {
	// generate a random integer between 2 and 10
	var randNum = Math.floor(Math.random() * 9) + 2;
	// build a colletion of div use the random numer to selcet one and add the yeti id to that element
	document.getElementsByTagName('div')[randNum].setAttribute('id', 'yeti');
	// add event listener to the div that now has an id of yeti
	document.getElementById('yeti').addEventListener('click', function() {
		window.alert('ROWRRR! You found the yeti, You lose!');
		document.getElementById('sound').play();
	});
}