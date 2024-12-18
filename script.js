let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const playGame = (userChoice) => {
  console.log("userChoice", userChoice);
  const compChoice = genCompChoices();
  console.log("compChoice", compChoice);
  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    msg.style.backgroundColor = "green";
    msg.innerText = `You Win! ${userChoice} Beats The ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    msg.style.backgroundColor = "red";
    msg.innerText = `You Lose! ${compChoice} Beats The ${userChoice}`;
    compScore++;
    compScorePara.innerText = compScore;
  }
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw";
};

const genCompChoices = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

// Example usage:
playGame("rock");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
