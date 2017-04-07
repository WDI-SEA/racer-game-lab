var gameStarted = false;
var redBoxPosition = 0;
var blueBoxPosition = 0;

var numberOfBoxes = 17;

function onPageLoaded() {
    console.log("Loaded!");

    var startButton = document.getElementById("start-button");
    console.log(startButton);

    startButton.addEventListener("click", onStartButtonClicked);



    document.addEventListener("keyup", onKeyUp);


    function onStartButtonClicked() {
        gameStarted = true;

        var startMenu = document.getElementById("start-menu");
        var game = document.getElementById("game");

        startMenu.classList.add("hidden");
        game.classList.remove("hidden");
    }

    function onKeyUp() {
        if (gameStarted == false) {
            return;
        }

        // -- -- --red-- -- -
        if (event.key == "a" && redBoxPosition < numberOfBoxes - 1) {
            console.log("move the red player");

            var currentRedBoxDiv = document.getElementById("redBox");
            currentRedBoxDiv.removeAttribute("id");

            redBoxPosition += 1;

            var redTrackBoxes = document.querySelectorAll(".red-track .box");
            redTrackBoxes[redBoxPosition].id = "redBox";

            if (redBoxPosition == redTrackBoxes.length - 1) {
                console.log("Red Wins!");
            }
            // -- - blue-- -- -- -
        } else if (event.key == "l" && blueBoxPosition < numberOfBoxes - 1) {
            console.log("move the blue player");

            var currentBlueBoxDiv = document.getElementById("blueBox");
            currentBlueBoxDiv.id = "";

            blueBoxPosition += 1;

            var blueTrackBoxes = document.querySelectorAll(".blue-track .box");
            blueTrackBoxes[blueBoxPosition].id = "blueBox";
            if (blueBoxPosition == blueTrackBoxes.length - 1) {
                console.log("Blue Wins!");
            }



        }
    }

}
document.addEventListener("DOMContentLoaded", onPageLoaded);
