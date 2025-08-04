function getComputerChoice() {
  const choice = Math.random();
  let computerMove;
  if (choice <= 1/3) {
    computerMove = "rock";
    return(computerMove);
  } else if (choice <= 2/3) {
    computerMove = "paper";
    return(computerMove);
  } else {
    computerMove = "scissors";
    return(computerMove);
  } 
}


let move;
const btnEl = document.querySelectorAll("button");
btnEl.forEach((button) => {
  button.addEventListener("click", function (e) {
    move = e.target.id;
    if (humanScore !== 5 && computerScore !== 5) {
      playRound();
    }
    if (humanScore === 5 || computerScore === 5) {
      showWin();
    } 
  })
})





let humanScore = 0;
let computerScore = 0;
const outputEl = document.querySelector("#output");



function playRound() {
  let humanSelection = move;
  let winner;
  let computerSelection = getComputerChoice();
  outputEl.innerText = `You picked ${humanSelection}, Computer picked ${computerSelection}! 
    ${getWinner(humanSelection, computerSelection)}`;
  document.getElementById("score").innerText = `Score: ${humanScore} - ${computerScore}`
}

function getWinner(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let result;
  
  if (humanChoice === "rock" && computerChoice === "paper") {
    result = "You lose!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = "You win!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = "You win!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = "You lose!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = "You lose!"; 
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = "You win!";
  } else if (humanChoice === computerChoice) {
    result = "Tie!";
  } else {
    console.log("Not a valid answer!");
  }

  if (result === "You win!") {
    humanScore++;
    winner = "You win!";
  } else if (result === "You lose!") {
    computerScore++;
    winner = "Computer wins!";
  }
  return(result);
}

function showWin() {
  const popup = document.getElementById("chooseMove");
  popup.innerText = `${winner}
  Refresh to retry!`;
}

