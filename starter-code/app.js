var gameStarted = false;
var redBoxPosition = 0;
var blueBoxPosition = 0;

var numberOfBoxes = 17;

function onPageLoaded() {
    console.log("go!");

    var startButton = document.getElementById("start-button");


    startButton.addEventListener('click', onStartButtonClicked);

    document.addEventListener("keyup", onKeyUp);
}

function onStartButtonClicked() {
    gameStarted = true;
    var startMenu = document.getElementById("start-menu");
    var game = document.getElementById("game");


    startMenu.classList.add("hidden");
    game.classList.remove("hidden");
};

///moves the players down the track
function onKeyUp(event) {

    if (gameStarted == false) {

        return;
    }

    if (event.key == 'a' && redBoxPosition < numberOfBoxes - 1) {
        var currentRedBox = document.getElementById("redBox");
        currentRedBox.id = "";

        redBoxPosition++;

        var redTrackBoxes = document.querySelectorAll(".red-track .box");

        if (redBoxPosition == redTrackBoxes.length - 1) {
            alert("Racer X wins!!");
            window.location.reload();

        } else {


            redTrackBoxes[redBoxPosition].id = "redBox";
        };

    } else if (event.key == 'l' && blueBoxPosition < numberOfBoxes - 1) {
        var currentBlueBox = document.getElementById("blueBox");
        currentBlueBox.id = "";
        blueBoxPosition++;

        var blueTrackBoxes = document.querySelectorAll(".blue-track .box");

        if (blueBoxPosition == blueTrackBoxes.length - 1) {

            alert("Speed Racer wins!!");
            window.location.reload();
        } else {
            blueTrackBoxes[blueBoxPosition].id = "blueBox";
        };

    }



}

document.addEventListener("DOMContentLoaded", onPageLoaded);
