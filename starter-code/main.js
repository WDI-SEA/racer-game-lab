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
    var audioKOTH = document.getElementById("king-of-the-hill");

    function playAudioGameStart() {
        audioKOTH.currentTime = 1000;
        audioKOTH.play();
    }

    function playAudioGameOver() {
        audioKOTH.pause();
        audioBeercan.currentTime = 1200;
        audioBeercan.play();
        setTimeout(function() {
            audioManBurp.play();
        }, 2000);
        document.getElementById("instructions").classList.add("hidden");
    }

    function gameOver(player, time, timeStarted) {
        message.classList.remove("hidden");
        playAudioGameOver();
        var timeToFinish = (time - timeStarted) / 1000;
        message.querySelector("h1").innerHTML = `${player} got the beer!! in ${timeToFinish} seconds!!`;
        message.querySelector("h1").classList.add("party");
    }

    function randomizeMotion(currentPosition) {
        var randomNum = Math.random();
        var positionMovement = 0;
        console.log(randomNum, positionMovement);
        if (randomNum > 0.25) {
            positionMovement = 1;
        } else if (randomNum <= 0.25 && currentPosition > 1) {
            positionMovement = -1;
        }
        console.log(randomNum, positionMovement);
        return positionMovement;

    }

    message.addEventListener("click", function() {
        // removes start menu and begins game
        message.classList.add("hidden");
        gameArea.classList.remove("hidden");

        playAudioGameStart();
        var gameWon = false;
        var timeStarted = Date.now(); //set to Date.Now() now, will subtract from Date.Now() after to obtain time to finish
        document.addEventListener("keyup", function(e) {
            // !!!!!!!!! ADD MATH.RANDOM TO MOVEMENT (ASSIGN POSITION MOVEMENT TO WHAT IS GENERATED)

            // if game has been won, nothing happens with key presses
            if (gameWon === false) {
                if (e.key === "a") {
                    // if the corect key is pressed, the current div's red/blue class is removed
                    // position is incremented
                    // the next div in line gets the right color(character) class added
                    // "a" is assigned to redBox AKA Boomhauer
                    redGameDivs[redPosition].classList.remove("redBox");
                    redPosition += randomizeMotion(redPosition);
                    redGameDivs[redPosition].classList.add("redBox");
                    if (redPosition === redGameDivs.length - 1) {
                        gameWon = true;
                        gameOver("Boomhauer", Date.now(), timeStarted);
                    }
                } else if (e.key === "l") {
                    // "l" is assigned to blueBox AKA Bill
                    blueGameDivs[bluePosition].classList.remove("blueBox");
                    bluePosition += randomizeMotion(bluePosition);
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
