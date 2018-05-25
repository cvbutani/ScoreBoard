var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1ScrUpdate = document.getElementById("p1Scr");
var p2ScrUpdate = document.getElementById("p2Scr");

var numInput = document.querySelector("input");
var gamePlay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winnigScore = 5;

p1Button.addEventListener("click", function () {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winnigScore) {				// we can use == or ===
			p1ScrUpdate.classList.add("winner");
			p2ScrUpdate.classList.add("loser");
			gameOver = true;
		}
		p1ScrUpdate.textContent = p1Score;	
	}
});

p2Button.addEventListener("click",function () {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winnigScore) {				// we can use == or ===
			gameOver = true;
			p2ScrUpdate.classList.add("winner");
			p1ScrUpdate.classList.add("loser");
		}
		p2ScrUpdate.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function () {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1ScrUpdate.textContent = p1Score;
	p2ScrUpdate.textContent = p2Score;
	p1ScrUpdate.classList.remove("winner");
	p2ScrUpdate.classList.remove("winner");
	p1ScrUpdate.classList.remove("loser");
	p2ScrUpdate.classList.remove("loser");
	gameOver = false;
}

numInput.addEventListener("change", function () {
	gamePlay.textContent = numInput.value;
	winnigScore = Number(numInput.value);
	reset();
});