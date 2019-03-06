
// program data:
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var won = false;
var guesses = [];
var index = 0;

// prompt user for their guess
do {
    guess = prompt("Guess a number: ");

    // if correct: let the user know they won
    if (guess == number) {
        document.write("Correct! You won.");
        won = true;
        break;
    }
    // if incorrect: let the user know
    else if (isPreviousGuess()) {
        alert("You have hit this block before");
    }
    else {
        guesses[guesses.length] = guess;
        alert("Incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - index - 1));
    }
    index ++;
} while (index < limit)

if(!won) {
    document.write("Sorry, you ran out of tries. Game over. <br> The correct number was: " + number);

function isPreviousGuess(){
    for(i = 0; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false;
}