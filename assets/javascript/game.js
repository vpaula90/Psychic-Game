var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
// Make a variable of all the letters of the alphabet for the computer to use to generate a random letter
var computerLetterToGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
// Variable that uses the Math.random function that calls the array from the alphabet variable and uses it to randomly select a letter
console.log("Loaded Computer Letter:" , computerLetterToGuess);
var userWins = 0;
var userLosses = 0;
//Wins and Losses start at 0 when the game starts and you will add to it based on your wins and losses
var userGuessesLeft = 9;
//User Guesses should start at 9, and you will subtract from it as you make incorrect guesses.
var guesses;
//Createing a variable to be called on the onkeyup function that will store the letter the player chose.
var userWrongGuesses = [];
//Empty array that will be filled with the letters that the player chose that do not match the computer selected letters


    document.onkeyup = function(event){
        guesses = event.key; 
        //function / event that picks up the letter that the player selected to use that leter to compare to the computer selection
        console.log("Player selection:", guesses);


        if (guesses === computerLetterToGuess) {
        userWins ++;
        userGuessesLeft = 9;
        userWrongGuesses = [];
        computerLetterToGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
        console.log("Computer Letter after Win:" , computerLetterToGuess);
        //If the letter selected in the onkeyup function equals the letter that the computer selected from the array then it will add to my wins variable, reset the User Guesses Left to 9, then it re-runs the computer guess variable to have the computer select another letter



        } else {
            userGuessesLeft --;
            userWrongGuesses.push(guesses);
            //if the first instance is not true and the players guess doesn't match the computer guess then My guesses left variable goes down by 1, and the letter guessed in the onkeyup event will be pushed into the empty array for user wrong guesses


        } if(userGuessesLeft === 0){
            userLosses ++;
            userGuessesLeft = 9;
            userWrongGuesses = [];
            computerLetterToGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
            console.log("Computer Letter after Loss:" , computerLetterToGuess);
            //If my guesses variable gets down to 0, it will add to my losses variable, guesses left will be reset to 9 and my user wrong guesses variable will be reset to an empty array. Then it will re-run the computer letter to guess math.random function to pick another letter for the computer


        };


        document.getElementById("user-Wins").innerHTML = userWins;
        document.getElementById("user-Losses").innerHTML = userLosses;
        document.getElementById("user-guessesLeft").innerHTML= userGuessesLeft;
        document.getElementById("user-wrongGuesses").innerHTML = userWrongGuesses;
        // Here we are calling the elements in the HTML file and appending or adding the results that have populated into the variable from the onkeyup event and the if else results. This will add to the Wins, losses, update the guesses left and guesses to far onto the Dom. 
    
    }


    
