let userGuessesE1 = document.getElementById("user-guesses");
let guessesLeftE1 = document.getElementById("guesses-left");
let userWinsE1 = document.getElementById("user-wins");
let userLossesE1 = document.getElementById("user-losses");


let computerChoices = ["q", "z", "a", "e", "d", "c", "t", "g", "b", "u", "j", "m", "o", "l"];

let guessesMax = 6;
let displayPredictions = []
//document.getElementById("user-guesses").innerHTML = displayPredictions;
//var for a feature that displays the wrong answers?
//userGuessesE1.textContent = `Guesses so far! ${userGuessesE1}'
/* to display the letter
document.userGuessesE1.innerHTML = `Guesses so far! ${userGuessesE1}'
now how to display all guesses...*/

let wins = 0;
let losses = 0;

/*every time the user guesses wrong guessMaxx-- and 
userPrediction displays the wrong answer*/
/*every time the user runs out of guessesMax, losses++, userPredictions resets
guessesMax resets*/
/*every time the user guesses correctly win++, userPredictions resets 
and guessesMax resets*/
//

document.onkeyup = function(event) {

let userPredictions = event.key;

let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];


if ((userPredictions === "q" || (userPredictions === "z") || (userPredictions === "a") || 
(userPredictions === "e") || (userPredictions === "d") || (userPredictions === "c") || 
(userPredictions === "t") || (userPredictions === "g") || (userPredictions === "b") || 
(userPredictions === "u") || (userPredictions === "j") || (userPredictions === "m") || 
(userPredictions === "o") || (userPredictions === "l")) ){

        wins++;
        document.getElementById("user-wins").innerHTML = `Wins: ${wins}`;
        guessesMax = 6;
        document.getElementById("guesses-left").innerHTML = `Guesses left: ${guessesMax}`;
        //displayPrediction = [];    
        document.getElementById("user-guesses").innerHTML = `Guesses so far: `;
        //displayPredictions resets
        guessesMax = 6;
    } else {
        displayPredictions.push(userPredictions);
        document.getElementById("user-guesses").innerHTML = `Guesses so far: ${displayPredictions}`;
        guessesMax--;
        document.getElementById("guesses-left").innerHTML = `Guesses left: ${guessesMax}`;
        
    } 
    
    if (guessesMax === 0){
            losses++;
            document.getElementById("user-losses").innerHTML = `Losses: ${losses}`;
            document.getElementById("user-guesses").innerHTML = `Guesses so far: `;
            guessesMax = 6;
            document.getElementById("guesses-left").innerHTML = `Guesses left: ${guessesMax}`;
        }

}
   






/*userWinsE1.textContent = `Wins: ${wins}`;
userLossesE1.textContent = `Losses: ${losses}`;
userGuessesE1.textContent = `Guesses so far: ${userGuessesE1}`;
guessesLeftE1.textContent = `Guesses left: ${guessesMax}`*/


//guessesMax reaches 0 then it resets 


