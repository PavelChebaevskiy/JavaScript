// let answers = [];
//     questions = [
//     "Whats your name?",
//     "Whats your second name?",
//     "How you old?"
//     ];

// for (var i = 0; i < questions.length; i++) {
//      answers[i] = prompt(questions[i]);
// }

// document.write(answers);


// let age = prompt("How you old?");
// if (age > 18) {
// 	alert("Wellcome my friend!");
// } else {
// 	alert("Go Home Yankey");
// }

// function calc (a,b) {
// 	console.log(a + b)
// };

// calc(4,5);
// calc(5,5);
// calc(5,3);

function myFistApp (name, age) {

	alert("Hello my name " + name + " this my first app");

	function showSkills () {
		let skills = [
        "Photoshop",
        "HTML",
        "CSS",
        "JavaScript"
		];
		for (let i = 0; i < skills.length; i++) {
			skills[i] = document.write("Я владею " + skills[i] + "<br/>");
		}
	}
	showSkills();

	function checkAge () {

		if (age > 18){
			alert("Круто! Ты принят!");
		} else {
			alert("У тебя все получится! Не парься!");
		}
	}
    checkAge();

	function calcPow (num) {
		console.log(Math.pow(num, 2));
	}
	calcPow(4) /*16*/
}

myFistApp("Pasha", 17);