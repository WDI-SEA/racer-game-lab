// media query for tablet


var redPosition = 1;
var bluePosition = 1;

function makeTrack(color, trackNumber) {
    for (i = 0; i < 16; i++) {
        var trackDiv = document.createElement('div');
        trackDiv.classList.add('box', color + "Track");
        document.getElementsByClassName('game-board')[trackNumber].appendChild(trackDiv);
    }
    $('.' + color + 'Track:last').addClass('lastBox');
}


function checkWinner(box) {
    var offset = $("." + box).offset();
    if ($(".lastBox").offset().left - offset.left < 5 && box === 'redBox') {
        document.getElementById("alert").style.display = 'block';
        document.getElementById('start-button').innerHTML = "Play Again";

    } else if ($(".lastBox").offset().left - offset.left < 5 && box === 'blueBox') {
        document.getElementById("alert").style.display = 'block';
        document.getElementById("alert").innerHTML = 'BLUE WINS';
        document.getElementById("alert").style.backgroundColor = 'blue';
        document.getElementById('start-button').innerHTML = "Play Again";

    }
    if (document.getElementById("alert").style.display == 'block') {
        document.removeEventListener('keyup', whichKey)
        document.getElementById('red-button').removeEventListener('click', whichBar);
        document.getElementById('blue-button').removeEventListener('click', whichBar);
    }
}

function moveBox(track, position, box) {
    document.getElementsByClassName(track)[position].className += " " + box;
    document.getElementsByClassName(track)[position - 1].classList.remove(box);
    checkWinner(box);
}



function whichKey(e) {
    if (e.keyCode == 65) {
        moveBox('redTrack', redPosition, 'redBox');
        redPosition += 1;

    } else if (e.keyCode == 76) {
        moveBox('blueTrack', bluePosition, 'blueBox');
        bluePosition += 1;
    }

}

function whichBar() {
    if (this.getAttribute('id') == 'red-button') {

        moveBox('redTrack', redPosition, 'redBox');
        redPosition += 1;
    } else if (this.getAttribute('id') == 'blue-button') {
        moveBox('blueTrack', bluePosition, 'blueBox');
        bluePosition += 1;
    }
}

function resetBoard() {
    console.log('sdfklj');
    $('.blueTrack').removeClass('blueBox');
    $('.blueTrack:first').addClass('blueBox');
    $('.redTrack').removeClass('redBox');
    $('.redTrack:first').addClass('redBox');
    redPosition = 1;
    bluePosition = 1;
    document.getElementById('start-button').innerHTML = "Start Game";
    document.getElementById('alert').style.display = "none";
    document.getElementById("alert").innerHTML = 'RED WINS';
    document.getElementById("alert").style.backgroundColor = 'red';
}

function startGame() {
    console.log("gamestart");
    resetBoard();
    document.addEventListener("keyup", whichKey);
    document.getElementById('red-button').addEventListener('click', whichBar);
    document.getElementById('blue-button').addEventListener('click', whichBar);
}

if (screen.width < 800) {
    document.getElementsByTagName('span')[0].innerHTML = 'Tap Red Bar for Red Player. Tap Blue Bar for Blue Player';
} else {
    document.getElementsByTagName('span')[0].innerHTML = 'Press "a" for Red Player and "l" for Blue Player';

}


document.addEventListener('DOMContentLoaded', makeTrack('red', 0), makeTrack('blue', 1));
document.getElementById('start-button').addEventListener('click', startGame)
