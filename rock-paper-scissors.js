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


function getHumanChoice() {
  choice = prompt("Enter your choice!", "rock");
  return(choice);
}


let humanScore = 0;
let computerScore = 0;


function playRound() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  console.log(`You picked ${humanSelection}, Computer picked ${computerSelection}! 
    ${getWinner(humanSelection, computerSelection)} 
    Score: ${humanScore} - ${computerScore}`);
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
  } else if (result === "You lose!") {
    computerScore++;
  }
  return(result);
}

