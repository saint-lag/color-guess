
// Refresh Page
resetGame();

// Functions

function randomColor() {
	const availableColors = ['red', 'maroon', 'orange', 'olive', 'greenyellow', 'green', 'lime', 'teal', 'blue', 'navy', 'blueviolet', 'purple',];

	const colorIndex = parseInt(Math.random() * (availableColors.length));
	const color = availableColors[colorIndex];

	return color;
}

function randomizeBallColor(ball) {
	ball.style.background = randomColor();
}

function randomizeSelectedBall() {
	const selectedBall = parseInt(Math.random() * (6));
	return selectedBall;
}

function resetGame() {
	for (let ball of document.querySelectorAll('.ball')) {
		randomizeBallColor(ball);
	} if (document.querySelector('.selected') === null) {
		let randomBall = randomizeSelectedBall();

		document.querySelectorAll('.ball')[randomBall].className += ' selected';
		document.querySelector('#rgb-color').innerText = getSelectedBallColor();

	} else {
		document.querySelector('.selected').classList.remove('selected');
		document.querySelectorAll('.ball')[randomizeSelectedBall()].className += ' selected';
		document.querySelector('#rgb-color').innerText = getSelectedBallColor();
		document.querySelector('#answer').innerText = 'Escolha uma cor'
	}
}

function getSelectedBallColor() {
	const ballColor = document.querySelector('.selected').style.background;
	const rgbColors = { 'red': 'rgb(255, 0, 0)', 'maroon': 'rgb(128, 0, 0)', 'orange': 'rgb(255, 165, 0)', 'olive': 'rgb(255, 165, 0)', 'greenyellow': 'rgb(173, 255, 47)', 'green': 'rgb(0, 128, 0)', 'lime': 'rgb(0, 255, 0)', 'teal': 'rgb(0, 128, 128)', 'blue': 'rgb(0, 0, 255)', 'navy': 'rgb(0, 0, 128)', 'blueviolet': 'rgb(138, 43, 226)', 'purple': 'rgb(128, 0, 128)', };

	for (let color of Object.keys(rgbColors)) {
		if (color === ballColor) {
			let key = color;
			let index = Object.keys(rgbColors).indexOf(key);
			var rgbBallColor = Object.values(rgbColors)[index];
		}
	}
	return rgbBallColor;
}

function verifiesAnswer(ball) {
	if (ball.className === 'ball selected') {
		return true;
	} else {
		return false;
	}
}

// Buttons
document.getElementById('reset-game').addEventListener('click', function () {
	resetGame();
});

for (let ball of document.querySelectorAll('.ball')) {
	ball.addEventListener('click', function (event) {
		if (verifiesAnswer(event.target) === true) {
			document.querySelector('#answer').innerText = 'Acertou!';
		} else {
			document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
		}
	})
}

