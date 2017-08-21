
function playerName() {
	var name = prompt('Welcome to the "Rock, Paper, Scissors" game!\nPlease enter your name:');
	document.getElementById('human').innerHTML = name;
	if (!name) {
		document.getElementById('human').innerHTML = 'Player 1';
	}
}
playerName();

function theGame() {
	var btnRock = document.querySelector('#button_rock');
	var btnPaper = document.querySelector('#button_paper');
	var btnScissors = document.querySelector('#button_scissors');
	var imgRock = document.querySelector('#rock');
	var imgPaper = document.querySelector('#paper');
	var imgScissors = document.querySelector('#scissors');
	var imgAllThree = document.getElementsByClassName('all_three');
	var outcome = document.querySelector('.outcome');
	var hiddenComputerImages = document.querySelector('.hidden_computer');
	var imagesHuman = document.querySelectorAll('.hidden_human img');
	var imagesComputer = document.querySelectorAll('.hidden_computer img'); 

	btnRock.addEventListener('click', afterThreeSeconds);
	function afterThreeSeconds() {
		var write123 = setInterval(writeOneTwoThree, 800);
		var count = 3;
		function writeOneTwoThree() {
			if (count === 0) {
				clearInterval(write123);
			} else {
				outcome.innerHTML = count;
				count--;
			}
		}

		for (var h = 0; h < imagesHuman.length; h++) {
				imagesHuman[h].style.display = "none";
		}
		for (var j = 0; j < imagesComputer.length; j++) {
				imagesComputer[j].style.display = "none";
		}

		var timeout = setTimeout(pressRock, 3000);
		function pressRock() {
			for (var i = 0; i < imgAllThree.length; i++) {
				imgAllThree[i].style.display = "none";
			}
			var num = Math.floor(Math.random() * 3);
			imagesComputer[num].style.display = 'block';
			imgRock.style.display = "block";
			imgPaper.style.display = "none";
			imgScissors.style.display = "none";
	
			if ((imagesHuman[0].style.display == "block") && (imagesComputer[0].style.display == "block")) {
				outcome.innerHTML = "IT'S A TIE!";
			} else if ((imagesHuman[0].style.display == "block") && (imagesComputer[1].style.display == "block")) {
				outcome.innerHTML = "YOU LOSE";
			} else {
				outcome.innerHTML = "YOU WIN";
			}
			clearInterval(timeout);
		}

	}




	btnPaper.addEventListener('click', afterThreeSecondsP);
	function afterThreeSecondsP() {
		var write123 = setInterval(writeOneTwoThree, 800);
		var count = 3;
		function writeOneTwoThree() {
			if (count === 0) {
				clearInterval(write123);
			} else {
				outcome.innerHTML = count;
				count--;
			}
		}

		for (var h = 0; h < imagesHuman.length; h++) {
				imagesHuman[h].style.display = "none";
		}
		for (var j = 0; j < imagesComputer.length; j++) {
				imagesComputer[j].style.display = "none";
		}

		var timeout = setTimeout(pressPaper, 3000);
		function pressPaper() {
			for (var i = 0; i < imgAllThree.length; i++) {
				imgAllThree[i].style.display = "none";
			}
			var num = Math.floor(Math.random() * 3);
			imagesComputer[num].style.display = 'block';
			imgPaper.style.display = "block";
			imgRock.style.display = "none";
			imgScissors.style.display = "none";

			if ((imagesHuman[1].style.display == "block") && (imagesComputer[0].style.display == "block")) {
				outcome.innerHTML = "YOU WIN";
			} else if ((imagesHuman[1].style.display == "block") && (imagesComputer[1].style.display == "block")) {
				outcome.innerHTML = "IT'S A TIE!";
			} else {
				outcome.innerHTML = "YOU LOSE";
			}
			clearInterval(timeout);
		}
	}
	

	btnScissors.addEventListener('click', afterThreeSecondsS);
	function afterThreeSecondsS() {
		var write123 = setInterval(writeOneTwoThree, 800);
		var count = 3;
		function writeOneTwoThree() {
			if (count === 0) {
				clearInterval(write123);
			} else {
				outcome.innerHTML = count;
				count--;
			}
		}

		for (var h = 0; h < imagesHuman.length; h++) {
				imagesHuman[h].style.display = "none";
		}
		for (var j = 0; j < imagesComputer.length; j++) {
				imagesComputer[j].style.display = "none";
		}

		var timeout = setTimeout(pressScissors, 3000);
		function pressScissors() {
			for (var i = 0; i < imgAllThree.length; i++) {
				imgAllThree[i].style.display = "none";
			}
			var num = Math.floor(Math.random() * 3);
			imagesComputer[num].style.display = 'block';
			imgScissors.style.display = "block";
			imgRock.style.display = "none";
			imgPaper.style.display = "none";

			if ((imagesHuman[2].style.display == "block") && (imagesComputer[0].style.display == "block")) {
				outcome.innerHTML = "YOU LOSE";
			} else if ((imagesHuman[2].style.display == "block") && (imagesComputer[1].style.display == "block")) {
				outcome.innerHTML = "YOU WIN";
			} else {
				outcome.innerHTML = "IT'S A TIE!";
			}
			clearInterval(timeout);
		}
	}
}
theGame();
