const randomNumber = Math.floor(Math.random() * 100) + 1;
const feedback = document.getElementById("feedback");
let userGuess;

document.getElementById("guessButton").addEventListener("click", function() {
    userGuess = parseInt(document.getElementById("guessInput").value);

    guessCheck();
});

function guessCheck() {
    while(userGuess !== randomNumber) {
        if(userGuess < randomNumber) {
            feedback.textContent = "Too low! Try again.";
        } else if(userGuess > randomNumber) {
            feedback.textContent = "Too high! Try again.";
        }
        return;
    }
    feedback.textContent = "Congratulations! You've guessed the number!";
}
