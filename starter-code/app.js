var redBoxPosition = 0;
var blueBoxPosition = 0;
var numberOfBoxes = 17;

function divMaker(parentDiv) {
    for (i = 0; i < 17; i++) {
        var divCreator = document.createElement('div');
        divCreator.classList.add('box');
        parentDiv.appendChild(divCreator);
    }
}

function onPageLoaded() {
    var redParentDiv = document.getElementById('red-divs');
    var blueParentDiv = document.getElementById('blue-divs');

    divMaker(redParentDiv);
    divMaker(blueParentDiv);

    redParentDiv.firstElementChild.id = 'redBox';
    blueParentDiv.firstElementChild.id = 'blueBox';

    var startButton = document.getElementById('button');

    startButton.addEventListener('click', onStartButtonClicked);
}

function onStartButtonClicked() {
    var startMenu = document.getElementById('start-menu');
    var game = document.getElementById('game');

    startMenu.classList.remove('flex-container');
    startMenu.classList.add('hide');
    game.classList.remove('hide');

    document.addEventListener('keyup', onKeyUp);
}

function onKeyUp() {
    if (event.key == "a" && redBoxPosition < numberOfBoxes - 1) {
        var currentRedBoxDiv = document.getElementById('redBox');

        currentRedBoxDiv.id = '';
        redBoxPosition += 1;

        var redPath = document.querySelectorAll('.red-track .box');

        redPath[redBoxPosition].id = 'redBox';
        if (redBoxPosition == redPath.length - 1) {
            console.log("Red wins!");
        }
    } else if (event.key == 'l' && blueBoxPosition < numberOfBoxes - 1) {
        var currentBlueBoxDiv = document.getElementById('blueBox');

        currentBlueBoxDiv.id = '';
        blueBoxPosition += 1;

        var bluePath = document.querySelectorAll('.blue-track .box');

        bluePath[blueBoxPosition].id = 'blueBox';
        if (blueBoxPosition == bluePath.length - 1) {
            console.log("Blue wins!");
        }
    }
}

document.addEventListener('DOMContentLoaded', onPageLoaded);
