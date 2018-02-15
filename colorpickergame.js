 var nos = 6;
var colors= generateRandomColors(nos);
 
 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var reset = document.getElementById("reset");
 var easybtn = document.getElementById("easybtn");
 var hardbtn = document.querySelector("#hardbtn");
 colorDisplay.textContent = pickedColor;

 easybtn.addEventListener("click", function() {
 	nos = 3;
 	easybtn.classList.add("selected");
 	hardbtn.classList.remove("selected");
 	h1.style.background= "steelblue";
 	colors = generateRandomColors(nos);
 	pickedColor = pickColor();
 	reset.textContent= "New game";
 	message.textContent = "";
 	colorDisplay.textContent = pickedColor;
 	for (var i = 0; i < nos; i++) {
 			squares[i].style.background = colors[i];}
 	for (var i = nos; i < 6; i++) {
 	
 			squares[i].style.display = "none";
 	}
 
 });
 
 hardbtn.addEventListener("click", function() {
 	nos = 6;
 	easybtn.classList.remove("selected");
 	hardbtn.classList.add("selected");
 	h1.style.background= "steelblue";
 	
  	colors = generateRandomColors(nos);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	reset.textContent= "New game";
 	message.textContent = "";

 	for (var i = 0; i < nos; i++) 
 	    squares[i].style.display = "block";
 	for (var i = 0; i < colors.length; i++) 
 			squares[i].style.background = colors[i];		
 }
);



for(var i = 0 ; i < squares.length; i++){
 	squares[i].style.background = colors[i];
 	squares[i].addEventListener("click", function() {
 		var clickedColor = this.style.background;
 		if( clickedColor === pickedColor){
 			messageDisplay.textContent = "Correct!";                     
 			changeColor(clickedColor); 
 			h1.style.background = clickedColor;	
 			reset.textContent = "Play Again!";

 		}
 		else {
 			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!" ;

 		}
 	});
 } 

 reset.addEventListener("click", function() {
 	reset.textContent= " New Game!";
 	messageDisplay.textContent= "";
 	colors = generateRandomColors(nos);
 	pickedColor = pickColor();
 	h1.style.background = "steelblue";
 	colorDisplay.textContent = pickedColor;
 	for (var i = 0; i < colors.length; i++) 
		squares[i].style.background = colors[i];
 });

function changeColor(color){
	for (var i = 0; i < squares.length; i++) 
		squares[i].style.background = color;
	
}

function pickColor() {
	var random = Math.floor( Math.random() * colors.length );
	return colors[random];
}
 function generateRandomColors(num) {
 	var arr = [];
 	for (var i = 0; i < num; i++) {
 		arr.push(randomColor());
 	}
 	return arr;

 }

 function randomColor() {
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r +", " + g + ", " +b + ")" ;
    
 }