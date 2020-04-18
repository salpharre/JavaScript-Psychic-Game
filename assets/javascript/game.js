
/*   */
let userGuessesE1 = document.getElementById("user-guesses");
let guessesLeftE1 = document.getElementById("guesses-left");
let userWinsE1 = document.getElementById("user-wins");
let userLossesE1 = document.getElementById("user-losses");

/*   */
let computerChoices = ["q", "z", "a", "e", "d", "c", "t", "g", "b", "u", "j", "m", "o", "l"];


/*   */
let guessesMax = 6;
let displayPredictions = []

/*   */
let wins = 0;
let losses = 0;

/*  */
document.onkeyup = function(event) {

/*   */    
let userPredictions = event.key;


/*   */
let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

/*   */

if ((userPredictions === "q" || (userPredictions === "z") || (userPredictions === "a") || 
(userPredictions === "e") || (userPredictions === "d") || (userPredictions === "c") || 
(userPredictions === "t") || (userPredictions === "g") || (userPredictions === "b") || 
(userPredictions === "u") || (userPredictions === "j") || (userPredictions === "m") || 
(userPredictions === "o") || (userPredictions === "l")) ){


    /*   */
        wins++;

        userWinsE1.innerHTML = `Wins: ${wins}`;

        guessesMax = 6;

        guessesLeftE1.innerHTML = `Guesses left: ${guessesMax}`;
        
    /*  */ 
        function empty(){
            displayPredictions.length = 0;
        }empty();

        userGuessesE1.innerHTML = `Guesses so far: `;
    
    /*  */
        guessesMax = 6;


    } 
    
    /*   */
    else {
        displayPredictions.push(userPredictions);

        userGuessesE1.innerHTML = `Guesses so far: ${displayPredictions}`;

        guessesMax--;

        guessesLeftE1.innerHTML = `Guesses left: ${guessesMax}`;
        
    } 

    /*  */
        if (guessesMax === 0){

            losses++;

            userLossesE1.innerHTML = `Losses: ${losses}`;

            userGuessesE1.innerHTML = `Guesses so far: `;

            guessesMax = 6;

            guessesLeftE1.innerHTML = `Guesses left: ${guessesMax}`;
        }

}



