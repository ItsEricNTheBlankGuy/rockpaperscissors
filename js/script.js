// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    
    
    
    let turnPick = $("#input").val();
    
    function turnPickText () {
        $("#userChoice").text(turnPick);
    }
    
    if(turnPick === "rock") {
        turnPickText();
        var myValue = 0;
    } else if (turnPick === "paper") {
        turnPickText();
        var myValue = 1;
    } else if (turnPick === "scissor") {
        turnPickText();
        var myValue = 2;
    } 
    

    
    let number = Math.floor(Math.random() * 3);
    
    if (number === 0) {
        $("#computerChoice").text("rock");
    } else if (number === 1) {
        $("#computerChoice").text("paper");
    } else if (number === 2) {
        $("#computerChoice").text("scissor");
    }
    
    if (myValue - number === 1 || myValue - number === -2) {
        $("#result").text("Win");
    } else if (number - myValue === 1 || number - myValue === -2) {
        $("#result").text("Lose");
    } else {
        $("#result").text("Tie");
    }
    
});
