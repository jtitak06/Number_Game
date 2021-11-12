let form = document.querySelector("form");
let instructions = document.querySelector(".instructions");
let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");
let rand;
let guess;
let guesses = document.getElementById("guesses");
let number = 0;
let feedback = document.getElementById("feedback");

//variables for timer
const startingMinutes = 0;
let time = startingMinutes * 60;
let countdownEl = document.getElementById("countdown");

// Confetti feature
let celebration = document.querySelector("#my-canvas");

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


// functionality for timer
let timer;

//= setInterval(updateCountdown, 1000);
input.addEventListener("focus", function startTimer() {
  timer = setInterval(updateCountdown, 1000);

  input.removeEventListener("focus", startTimer);
})

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  countdownEl.textContent = `${minutes}:${seconds}`;
  time++;
};

//start timer

//generate random number
function randomNumber() {
  rand = Math.floor(Math.random() * 100) + 1;
};

randomNumber();


// functionality for confetti
function addConfetti() {
  celebration.classList.add("active");
};

// submit guess button
form.addEventListener("submit", function (event) {
  event.preventDefault();
  guess = input.value;
  guessGame();
  number++;
  guesses.textContent = number;
});

// reset button
reset.addEventListener("click", function restartGame() {
  randomNumber();
  celebration.classList.remove("active");
  instructions.textContent = "Guess a number between 1-100."
  countdownEl.textContent = "0:00";
  guesses.textContent = 0;
  time = 0;
  timer = setInterval(updateCountdown, 1000);
  number = 0;
});

//enter feedback
feedback.addEventListener("keyup", function submitFeedback(event) {
  if (event.keyCode == 13) {
    feedback.placeholder = "Thanks for the feedback! Enjoy the game!";
    feedback.value = '';
    feedback.blur();
  };
});

// number game functionality
function guessGame() { 
    if (guess < rand && guess > 0) {
      instructions.textContent = `${guess} is too low. Please try again.`;
      input.value = "";
    } else if (guess > rand) {
      instructions.textContent = `${guess} is too high. Please try again.`;
      input.value = "";
    } else if (guess == rand) {
      instructions.textContent = `Congratulations! ${guess} is correct!`;
      addConfetti();
      clearInterval(timer);
    } else {
      instructions.textContent = `${guess} is not a number. Please enter a number between 1-100.`;
      input.value = "";
    };
};