let form = document.querySelector("form");
let instructions = document.querySelector(".instructions");
let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");
let rand;
let guess;
let celebration = document.querySelector("#my-canvas");

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

function randomNumber() {
  rand = Math.floor(Math.random() * 100) + 1;
  console.log(rand);
}

randomNumber();

function addConfetti() {
  celebration.classList.add("active");
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  guess = input.value;
  guessGame();
});


reset.addEventListener("click", function restartGame() {
  randomNumber();
  celebration.classList.remove("active");
  instructions.textContent = "Guess a number between 1-100."
})

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
    } else {
      instructions.textContent = `${guess} is not a number. Please enter a number between 1-100.`;
      input.value = "";
    }
}


//function guessGame() {
//    let rand = Math.floor(Math.random() * 100) + 1;
//    let guess;
//    console.log(rand);
//    do {
//        guess = window.prompt("Guess a number between 1-100.");
//        if (guess < rand) {
//            alert("Your number is too low. Please try again.");
//            } else if (guess > rand) {
//            alert("Your number is too high. Please try again.");
//            } else if (guess == rand) {
//            alert("Congrats! Your number is correct!");
//            } else {
//            alert("Please enter a number between 1-100.")
//            }
//    } while (rand != guess)
//
//    }
//
//guessGame();
