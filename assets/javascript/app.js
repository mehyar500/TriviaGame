// function ready() {
// 	//create array of questions and answers options
// 	var questions = [
//   ["Who said, 'I think, therefore I am'?", "Descartes", "Archimedes", "Al-Khwarizmi", "Pythagoras"],
//   ["What's the smallest country in the world?", "Vatican City", "Peru", "Japan", "Syria"],
//   ["Who painted the Mona Lisa?", "Leo Da Vinci", "Vincent Van Gogh", "Salvador Dali", "Picasso"],
//   ["Did Neil Armstrong put his left or right foot on the moon first?", "Left", "Right", "Both", "Neither"],
//   ["What's the real name of Siddartha Gautama?", "Buddha", "Hitler", "Jesus", "Mussolini"],
//   ["WWhich planet is nearest the sun?", "Mercury", "Earth", "Saturn", "Jupiter"]
//   ];
// };

	document.getElementById("quiz").onsubmit=function() {
    firstq = parseInt(document.querySelector('input[name = "firstq"]:checked').value);
	secondq = parseInt(document.querySelector('input[name = "secondq"]:checked').value);
	thirdq = parseInt(document.querySelector('input[name = "thirdq"]:checked').value);
	forthq = parseInt(document.querySelector('input[name = "forthq"]:checked').value);
	   
	result = firstq + secondq + thirdq + forthq;
	   
	document.getElementById("grade").innerHTML = result;

	return false; // required to not refresh the page
	}

	if (result == 0) {result2 = "I don't think you studied."};
	if (result == 25) {result2 = "You need to spend more time. Try again."};
	if (result == 50) {result2 = "I think you could do better. Try again."};
	if (result == 75) {result2 = "So close. Try again."};
	if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};
	document.getElementById("grade2").innerHTML = result2; 




