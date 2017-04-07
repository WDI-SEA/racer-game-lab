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
    var audioBeercan = document.getElementById("beercan");
    var audioManBurp = document.getElementById("manburp");

    function playAudioGameOver() {
        audioBeercan.curentTime += 650;
        audioBeercan.play();
        setTimeout(function() { audioManBurp.play() }, 2000);
    }

    function gameOver(player, time, timeStarted) {
        message.classList.remove("hidden");
        playAudioGameOver();
        var timeToFinish = (time - timeStarted) / 1000;
        message.querySelector("h1").innerHTML = `${player} got the beer!! in ${timeToFinish} seconds!!`;
        message.querySelector("h1").classList.add("party");
    }


    message.addEventListener("click", function() {
        // removes start menu and begins game
        message.classList.add("hidden");
        gameArea.classList.remove("hidden");
        var gameWon = false;
        var timeStarted = Date.now(); //set to Date.Now() now, will subtract from Date.Now() after to obtain time to finish
        console.log(timeStarted);
        document.addEventListener("keyup", function(e) {


            // if game has been won, nothing happens with key presses
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
                        gameOver("Boomhauer", Date.now(), timeStarted);
                    }
                } else if (e.key === "l") {
                    // "l" is assigned to blueBox AKA Bill
                    blueGameDivs[bluePosition].classList.remove("blueBox");
                    bluePosition += 1;
                    blueGameDivs[bluePosition].classList.add("blueBox");
                    if (bluePosition === blueGameDivs.length - 1) {
                        gameWon = true;
                        gameOver("Bill", Date.now(), timeStarted);
                    }
                }
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", onLoad);
