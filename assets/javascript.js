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

var game;

/* Game functions */

//default status of game before starting
function resetGame() {
    game = {
        status: 'off',
        strict: 'off',
        round: "--",
        gameSequence: [],
        playerSequence: [],
        timestep: 1000,
        allowPress: true,
        active: false
    };
    round = 0;
    $('#round-screen').attr("placeholder", game.round);
    $('.strict-led').css('background-color', '#700303');
}

//Add a number to the game sequence
function addNumber() {
    game.gameSequence.push(Math.floor(Math.random() *4));
    game.round === '--' ? game.round = 1 : game.round +=1;
    $('#round-screen').attr('placeholder', game.score);
}

//Play the game
function playSequence() {
    if (game.score >= 20) {
        winScreen();
    }
    else {
        $('#btn-start').css('background-color', colors.greenOn);
    game.allowPress = false;
    // Timestep gets shorter with each addition to the sequence
    game.timestep = 1000 - (game.gameSequence.length * 25);
    game.gameSequence.forEach(function(button, counter){
        setTimeout(function() {
            playSound(button);
        }, game.timestep*(counter+1));
    });
//Event Listeners
$('#btn-start').click(function() {
    if (game.allowPress === true && game.active === false) {
        game.active = true;
        addNumber();
        playSequence();
    }
});
