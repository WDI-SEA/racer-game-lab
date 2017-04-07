    var gameStarted = false;
    var redBoxPosition = 0;
    var blueBoxPosition = 0;
    var numberOfBoxes = 17;

    function createDivClassBoxes() {
        console.log("I am setting up the div class boxes!");
        //Append the boxes to the red-boxes div
        var redBoxes = document.getElementById('red-boxes');
        for (var i = 0; i < numberOfBoxes; i++) {
            var divClassBox = document.createElement("div")
            divClassBox.className = "box";
            redBoxes.appendChild(divClassBox);
            console.log("Added a red box.");
        }
        //Show what was appended
        console.log(redBoxes);
        //Add the 'redBox' Id to the first box
        //Get the first Element Child and set the Id on it
        redBoxes.firstElementChild.setAttribute('id', "redBox");

        //Now I am creating the blue boxes...

        var blueBoxes = document.getElementById('blue-boxes');
        for (var i = 0; i < numberOfBoxes; i++) {
            var divClassBox = document.createElement("div")
            divClassBox.className = "box";
            blueBoxes.appendChild(divClassBox);
            console.log("Added a blue box.");
        }
        //Show what was appended
        console.log(blueBoxes);
        //Add the 'blueBox' Id to the first box
        //Get the first Element Child and set the Id on it
        blueBoxes.firstElementChild.setAttribute('id', "blueBox");

    };

    function onPageLoaded() {
        console.log("Loaded!");

        createDivClassBoxes();

        var startButton = document.getElementById("start-button");
        // console.log(startButton);

        startButton.addEventListener("click", function() {
            gameStarted = true;
            var startMenu = document.getElementById("start-menu");
            var game = document.getElementById("game");
            startMenu.classList.add("hidden");
            game.classList.remove("hidden");
        });

        document.addEventListener("keyup", function(event) {
            // console.log(event);
            // console.log(event.key);
            // console.log("keyup event fired.");
            if (gameStarted == false) {
                return;
            }

            if (event.key == "a" && redBoxPosition < numberOfBoxes - 1) {
                console.log("move the red player");

                var currentRedBoxDiv = document.getElementById("redBox");
                currentRedBoxDiv.id = "";
                // This moves the red square.
                redBoxPosition += 1;

                var redTrackBoxes = document.querySelectorAll(".red-track .box");

                if (redBoxPosition == redTrackBoxes.length - 1) {
                    console.log("Red won!");
                }

                redTrackBoxes[redBoxPosition].id = "redBox";
                // console.log(redTrackBoxes);
            } else if (event.key == "l" && blueBoxPosition < numberOfBoxes - 1) {
                console.log("move the blue player");

                var currentBlueBoxDiv = document.getElementById("blueBox");
                currentBlueBoxDiv.id = "";
                // This moves the blue square.
                blueBoxPosition += 1;

                var blueTrackBoxes = document.querySelectorAll(".blue-track .box");

                if (blueBoxPosition == blueTrackBoxes.length - 1) {
                    console.log("Blue won!");
                }

                blueTrackBoxes[blueBoxPosition].id = "blueBox";
            }

        });



    };

    document.addEventListener("DOMContentLoaded", onPageLoaded);
    //
