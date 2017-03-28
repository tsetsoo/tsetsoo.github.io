var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();


function init(){
	initModeButtons();
	initSquareListeners();
	resetButton.addEventListener("click", function(){
		reset(numSquares);
	});
	reset(numSquares);
}


function initModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			for (var i = 0; i < modeButtons.length; i++){
				modeButtons[i].classList.remove("selected");
			}	
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else if(this.textContent === "Medium"){
				numSquares = 6;
			} else if(this.textContent === "Hard"){
				numSquares = 9;
			} else if(this.textContent === "Super Hard"){
				numSquares = 12;
			}
			reset(numSquares);
		});
	}
}

function initSquareListeners(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try again";
			}
		})
	}
}

function setSquaresColors(){
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
}


function reset(numberOfColors){
	colors = generateRandomColors(numberOfColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	setSquaresColors();
	resetButton.textContent = "New Colors";
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}

function generateRandomColors(numberOfColors){
	var colors = [];
	for(var i = 0; i < numberOfColors; i++){
		colors.push(randomRgb());
	}
	return colors;
}

function randomRgb(){
	var r = Math.ceil(Math.random() * 255);
	var g = Math.ceil(Math.random() * 255);
	var b = Math.ceil(Math.random() * 255);

	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}