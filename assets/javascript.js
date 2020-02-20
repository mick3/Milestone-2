/* 
User Story: I am presented with a random series of button presses.
User Story: Each time I input a series of button presses correctly,
I see the same series of button presses but with an additional step.
User Story: I hear a sound that corresponds to each button both when the series
of button presses plays, and when I personally press a button.
User Story: If I press the wrong button, I am notified that I have done so, 
and that series of button presses starts again to remind me of the pattern so I can try again.
User Story: I can see how many steps are in the current series of button presses.
User Story: If I want to restart, I can hit a button to do so, and the game will 
return to a single step.
User Story: I can play in strict mode where if I get a button press wrong, it notifies 
me that I have done so, and the game restarts at a new random series of button presses.
User Story: I can win the game by getting a series of 20 steps correct. I am notified 
of my victory, then the game starts over.
*/

// Fire when page loads
$(document).ready(function() {
    resetGame();
  });

let orderOfLights = [];
let playerOrder = [];
let flash;
let turn;
let good;
let computerTurn;
let intervalId;
let strictActivated= false;
let noise = true;
let start = false;
let win;

const turnCounter = document.querySelector("#round-screen");
const topLeft = document.querySelector("#btn0");
const topRight = document.querySelector("#btn1");
const bottomRight = document.querySelector("#btn2");
const bottomLeft = document.querySelector("#btn3");
const startButton = document.querySelector("#btn-start");
const strictButton = document.querySelector("#btn-strict");
const resetButton = document.querySelector("#btn-reset");

startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

startButton.addEventListener('click', (event ) => {
    if (startButton.checked == true) {
        start = true;
        round-screen.innerHTML = "--";
    } else {
        start = false;
        round-screen.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }
})

strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    computerTurn = true;

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        computerTurn = false;
        clearColor;
        on = true;
    }

    if (computerTurn) {
        clearColor();
        setTimeout(() => {
        if (order[flash] == 1) one();
        if (order[flash] == 2) two();
        if (order[flash] == 3) three();
        if (order[flash] == 4) four();
        flash++;
        }, 200);
    }
}

function one() {
    if (noise) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
}