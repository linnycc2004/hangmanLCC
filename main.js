// Global Variables (accessible by all functions)
//---------------------------------------------------------------------

// Array of Word Options (all lowercase)
var wordslist = ["pineapple", "blueberry", "oranges"]

// Solution will be held here
var chosenWord = "";

// This will break the solution into individual letters to be stored in an array
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: a_ple)
var blanksAndSuccesses = [];

// Holds all of the wrong guesses
var wrongGuesses = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// Functions
// ----------------------------------------------------------------------------------

// Note: The startGame() function is not being run here. It's just being made for future use.
function startGame(){


        // Resets the guesses back to specified amount
    numGuesses = 9;

    // Solution is chosen randomly form wordList 
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]

    //The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;

    // We print the solution in console (for testing)
    console.log(chosenWord);

    // Critical Line -here we reset the guess and success array at each round.
    blanksAndSuccesses = [];
    // Critical Line -here we reset the wrong guess from the previous round.
    wrongGuesses = [];

    // Fill up the blanksAndSuccesses list with appropiate number of blanks. Which is based on the number of letters in the solution.
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // Print  the initial blanks in the console
    console.log(blanksAndSuccesses);

    // Reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // Prints the blanks at the beginning of each round in the html
    document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");


}