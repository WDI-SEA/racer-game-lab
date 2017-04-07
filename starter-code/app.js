var gameStarted = false;
var redBoxPosition = 0;
var blueBoxPosition = 0;

var numberOfBoxesRed = 15; // or ... querySelector(".red-track .box").length
var numberOfBoxesBlue = 10;

function onPageLoaded() {
    console.log("Loaded!");

    var startButton = document.getElementById("start-button");
    console.log(startButton);

    startButton.addEventListener("click", onStartButtonClicked);

    document.addEventListener("keyup", onKeyUp);
}
//====
function onStartButtonClicked() {
    gameStarted = true;

    var startMenu = document.getElementById("start-menu");
    var game = document.getElementById("game");

    startMenu.classList.add("hidden");
    game.classList.remove("hidden");
}
//====
function onKeyUp(event) {
    if (gameStarted == false) {
        return;
    }

    if (event.key == "a" && redBoxPosition < numberOfBoxesRed - 1) {
        console.log("move the red player");

        var currentRedBoxDiv = document.getElementById("redBox");
        currentRedBoxDiv.id = "";

        redBoxPosition += 1;

        var redTrackBoxes = document.querySelectorAll(".red-track .box");
        redTrackBoxes[redBoxPosition].id = "redBox";

        if (redBoxPosition == redTrackBoxes.length - 1) {
            console.log("red wins!");
        }
        //Blue after "else if"
    } else if (event.key == "l" && blueBoxPosition < numberOfBoxesBlue - 1) {
        console.log("move the blue player");

        var currentBlueBoxDiv = document.getElementById("blueBox");
        currentBlueBoxDiv.id = "";

        blueBoxPosition += 1;

        var blueTrackBoxes = document.querySelectorAll(".blue-track .box");
        blueTrackBoxes[blueBoxPosition].id = "blueBox";

        if (blueBoxPosition == blueTrackBoxes.length - 1) {
            console.log("Blue wins!");
            var showBlue = document.getElementById("goBlue");
            showBlue.classList.remove("hidden");
        }
    }
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
