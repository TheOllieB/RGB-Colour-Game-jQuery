$(document).ready(function(){

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

$(".mode").click(function(){
	$(".mode").removeClass("selected");
	$(this).addClass("selected");
	$(this).text() === "Easy" ? numSquares = 3 : numSquares = 6 ;
	$("#reset").click();
})

$("#reset").click(function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	$("#colorDisplay").text(pickedColor);
	$("#reset").text("New Colors");
	$("#message").text("");
	$(".square").each(function(i){
		if(colors[i]){
			$(this).css({
				display : "block" , background: colors[i]
			});
		} else {
			$(this).css("display", "none");
		}
	});
	$("h1").css("background", "steelblue");
});

$("#colorDisplay").text(pickedColor);
$(".square").each(function(i){
	$(this).css("background", colors[i]).click(function(){
		var clickedColor = $(this).css("backgroundColor");
		if(clickedColor === pickedColor) {
			$("#message").text("Correct!");
			$("#reset").text("Play Again?");
			$(".square").css("background", clickedColor);
			$("h1").css("background", clickedColor);
		} else {
			$(this).css("background" , "#232323");
			$("#message").text( "Try Again");
		}
	});
});

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


});
