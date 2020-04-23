
/* turns ids from html into variables */
let userGuessesE1 = document.getElementById("user-guesses");
let guessesLeftE1 = document.getElementById("guesses-left");
let userWinsE1 = document.getElementById("user-wins");
let userLossesE1 = document.getElementById("user-losses");

/* an array of letters for the computer to choose from */
let computerChoices = ["q", "z", "a", "e", "d", "c", "t", "g", "b", "u", "j", "m", "o", "l"];


/* created a variable of how many guesses the user will be allowed */
let guessesMax = 6;

/* empty array for wrong predictions user may guess, to be propagated in 
a later step */
let displayPredictions = []

/* set wins and losses to 0, creating a starting point for increments 
in the if...else statement */
let wins = 0;
let losses = 0;

/* a function for an event in which the user presses and release a key */
document.onkeyup = function(event) {

/* variable for whichever key is pressed */    
let userPredictions = event.key;


/* variable to make the computer choose randomly from the computerChoices array */
let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

/* conditional that must be true for block of text to run */

if (userPredictions === computerSelection){


    /* if conditional is true, the wins increase by 1 and is displayed */
        wins++;

    /* number of guesses allowed resets and is written over in html */
        guessesMax = 6;

        userWinsE1.innerHTML = `Wins: ${wins}`;

        guessesLeftE1.innerHTML = `Guesses left: ${guessesMax}`;
        
    /* if the user wins this function clears the displayPredictions array, that would
    otherwise be added to if the user guesses incorrectly, it resets the array for the
    next game */ 
        function empty(){
            displayPredictions.length = 0;
        }empty();

    /* Writes over the letters guessed to empty the text area */
        userGuessesE1.innerHTML = `Guesses so far: `;

    } 
    
    /* when user guesses incorrectly the letter guessed is added to the array
    via .push() and then displayed in the html. Number of guesses decreases and
    is displayed */
    else {
        displayPredictions.push(userPredictions);

        userGuessesE1.innerHTML = `Guesses so far: ${displayPredictions}`;

        guessesMax--;

        guessesLeftE1.innerHTML = `Guesses left: ${guessesMax}`;
        
    } 

    /* creates a conditional for when the user runs out of guesses, resetting
    letters guessed and number of guesses, both are then displayed in the html */
        if (guessesMax === 0){

            losses++;

            userLossesE1.innerHTML = `Losses: ${losses}`;

            userGuessesE1.innerHTML = `Guesses so far: `;

            guessesMax = 6;

            guessesLeftE1.innerHTML = `Guesses left: ${guessesMax}`;
        }

}



