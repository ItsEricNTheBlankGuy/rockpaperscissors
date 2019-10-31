// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    
    let turnPick = $("#input").val();
    
    if(["rock", "paper", "scissors"].includes(turnPick)) {
        $("#userChoice").text(turnPick);
    }
    
    let number = Math.floor(Math.random() * 3);
    
    if (number === 0) {
        $("#userChoice").text("rock");
    } 
});
