function onLoad() {
    // variables to collect message area and game area
    var message = document.getElementById("message");
    var gameArea = document.getElementById("game");

    // selects .boxes in upper flexcontainer
    var redGameDivs = document.querySelector(".flex-container").getElementsByClassName("box");
    // selects .boxes in lower flexcontainer
    var blueGameDivs = document.querySelectorAll(".flex-container")[1].getElementsByClassName("box");
    var redPosition = 0; // 0 is index of 1st box in redGameDivs
    var bluePosition = 0; // likewise for blueGameDivs

    function gameOver(player) {
        message.classList.remove("hidden");
        message.querySelector("h1").innerHTML = `${player} got the beer!!`;
    }


    message.addEventListener("click", function() {
        message.classList.add("hidden");
        gameArea.classList.remove("hidden");
        var gameWon = false; // designnates game hasn't been won yet, when true the key ups wont do anything

        document.addEventListener("keyup", function(e) {
            // the first two if statments check if the current character has reached the end of it's lane
            // AND that the game has ended (if so, key presses won't do anything)

            if (gameWon === false) {
                if (e.key === "a") {
                    // if the corect key is pressed, the current div's red/blue class is removed
                    // position is incremented
                    // the next div in line gets the right color(character) class added
                    // "a" is assigned to redBox AKA Boomhauer
                    redGameDivs[redPosition].classList.remove("redBox");
                    redPosition += 1;
                    redGameDivs[redPosition].classList.add("redBox");
                    if (redPosition === redGameDivs.length - 1) {
                        gameWon = true;
                        gameOver("Boomhauer");
                    }
                } else if (e.key === "l") {
                    // "l" is assigned to blueBox AKA Bill
                    blueGameDivs[bluePosition].classList.remove("blueBox");
                    bluePosition += 1;
                    blueGameDivs[bluePosition].classList.add("blueBox");
                    if (bluePosition === blueGameDivs.length - 1) {
                        gameWon = true;
                        gameOver("Bill");
                    }
                }
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", onLoad);
