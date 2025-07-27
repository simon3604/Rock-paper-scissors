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