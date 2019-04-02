var wins = 0;
var losses = 0;
var guesses = 0;
var letters = [];
var computerletter = "";





//on key up
$(document).on("keyup",function(event) {
console.log("KEY UP");
var playerLetter = event.key;

if (playerLetter != computerLetter){

}
});




function resetGame() {
    guesses = 9;
    letters = [];
    computerLetter = string.fromCharCode(97+Math.floor(Math.random() * 26))
    console.log("COMPUTER LETTER", computerLetter);
}