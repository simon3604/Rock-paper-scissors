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
console.log(getComputerChoice());

function getHumanChoice() {
  choice = prompt("Enter your choice!", "rock");
  if (choice === "rock") {
    return("rock");
  } else if (choice ==="paper") {
    return("paper");
  } else if (choice === "scissors") {
    return("scissors");
  } else {
    console.log("Not an option!");
  }
}
console.log(getHumanChoice());