var gameStarted = false;
var redBoxPosition = 0;
var blueBoxPosition = 0;

document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded!");

    var startButton = document.getElementById("startButton");
    console.log(startButton);

    startButton.addEventListener('click', function() {
        gameStarted = true;
        var startMenu = document.getElementById("start-menu");
        var game = document.getElementById("game");

        startMenu.classList.add("hidden");
        game.classList.remove("hidden");
    });

    // keypress. put event on document

    document.addEventListener("keyup", function(event) {
        if (gameStarted == false) {
            return;
        }
        if (event.key == "a") {
            console.log("move the red player");

            var currentRedBoxDiv = document.getElementById("redBox");
            currentRedBoxDiv.id = "";

            redBoxPosition += 1;

            var redTrackBoxes = document.querySelectorAll(".red-track .box");

            if (redBoxPosition === redTrackBoxes.length) {
                alert("Pink wins!! Refresh the page to play again.");
            }
            redTrackBoxes[redBoxPosition].id = "redBox";

        } else if (event.key == "l") {
            console.log("move the blue player");

            var currentBlueBoxDiv = document.getElementById("blueBox");
            currentBlueBoxDiv.id = "";

            blueBoxPosition += 1;

            var blueTrackBoxes = document.querySelectorAll(".blue-track .box");

            if (blueBoxPosition === blueTrackBoxes.length) {
                alert("Green wins!! Refresh the page to play again.");
            }
            blueTrackBoxes[blueBoxPosition].id = "blueBox";
        }
    })

});
