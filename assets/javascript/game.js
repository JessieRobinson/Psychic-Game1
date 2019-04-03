var wins = 0;
var losses = 0;
var guesses = 0;
var letters = [];
var computerletter = "";





//on key up
$(document).on("keyup",function(event) {
console.log("KEY UP");
var playerLetter = event.key;
if (playerLetter < "a" || playerLetter > "z" && letters.indexOf(playerLetter) ==1) 
if (playerLetter != computerLetter) {

guesses--;

letters.push(playerLetter);

if (guesses <= 0){
    losses++;
    resetGame();
} else {
    wins++;
    resetGame()

}

}
});


function resetGame() {
    guesses = 9;
    letters = [];
    computerLetter = string.fromCharCode(97+Math.floor(Math.random() * 26))
    console.log("COMPUTER LETTER", computerLetter);
}

function updateScoreboard() {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#guesses").text(guesses);
    $(#letters).text(letters);
}