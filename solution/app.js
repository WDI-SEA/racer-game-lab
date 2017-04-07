var gameStarted = false;
var redBoxPosition = 0;
var blueBoxPosition = 0;

document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("start-button");

    startButton.addEventListener("click", function() {
        var startMenu = document.getElementById("start-menu");
        var game = document.getElementById("game");
        startMenu.classList.add("hidden");
        game.classList.remove("hidden");
        gameStarted = true;
    });
    console.log('here')
    document.addEventListener("keyup", function(event) {
        console.log("key pressed:", event.key);
        var winner = document.getElementById("winner");
        var timeStart = Date.now();
        if (gameStarted == false) {
            return;
        }
        if (event.key == "a") {
            var currentRedBoxDiv = document.getElementById("red-box");
            currentRedBoxDiv.id = "";
            var redTrackBoxes = document.querySelectorAll(".red-track .box");
            redTrackBoxes[redBoxPosition].id = "red-box"
            redBoxPosition++;
            if (redBoxPosition == redTrackBoxes.length) {
                var timeEnd = Date.now();
                gameStarted = false;
                winner.classList.remove("hidden");
                winner.innerText = "Mowgli wins!"
            }

        } else if (event.key == "l") {
            var currentBlueBoxDiv = document.getElementById("blue-box");
            currentBlueBoxDiv.id = "";
            var blueTrackBoxes = document.querySelectorAll(".blue-track .box");
            blueTrackBoxes[blueBoxPosition].id = "blue-box"
            blueBoxPosition++;
            console.log("move the blue player")
            if (blueBoxPosition == blueTrackBoxes.length) {
                var timeEnd = Date.now();
                gameStarted = false;
                winner.classList.remove("hidden");
                var gameTime = (timeEnd - timeStart);
                console.log(gameTime);
                winner.innerText = "Baloo wins!"
            }

        }

    });
});
