var gameStarted = false;
var redBoxPosition = 0
var blueBoxPosition = 0
var numberOfBoxes = 17;

document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded!");

    var startButton = document.getElementById("start-button");
    console.log(startButton);

    startButton.addEventListener("click", function() {
        gameStarted = true;

        var startMenu = document.getElementById("start-menu");
        var game = document.getElementById("game");

        startMenu.classList.add("hidden");
        game.classList.remove("hidden");
    });
    ////****KEYBOARD CLICKS ****////////////////////////////////////////
    document.addEventListener("keyup", function(event) {
        if (gameStarted == false) {
            return;
        }

        //RED KEY///

        if (event.key == "a") {
            if (redBoxPosition <= numberOfBoxes - 1);
            console.log("move the red player");

            var currentRedBoxDiv = document.getElementById("redBox");
            currentRedBoxDiv.removeAttribute("id");

            redBoxPosition += 1;
            var redTrackBoxes = document.querySelectorAll(".red-track .box");
            if (redBoxPosition == redTrackBoxes.length) {
                alert("Mr. Turtle Won!");

            } else {
                redTrackBoxes[redBoxPosition].id = "redBox";
            }


            ///***BLUE SQUARE****///////

        } else if (event.key == "l") {
            if (blueBoxPosition <= numberOfBoxes - 1);
            console.log("move the blue player");

            var currentBlueBoxDiv = document.getElementById("blueBox");
            currentBlueBoxDiv.id = "";

            blueBoxPosition += 1;
            var blueTrackBoxes = document.querySelectorAll(".blue-track .box");
            if (blueBoxPosition == blueTrackBoxes.length - 1) {
                alert("Yay! You beat Mr. Turtle!");

            } else {
                blueTrackBoxes[blueBoxPosition].id = "blueBox";

            }
        }

    });

});
