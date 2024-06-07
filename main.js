function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  return computerChoice;
}

function getHumanChoice() {
  const choice = prompt("Write r(rock), p(paper) or s(scissors)").toLowerCase();
  switch (choice) {
    case "r":
      return 1;
    case "p":
      return 2;
    case "s":
      return 3;
    default:
      return "Invalid choice, please enter r, p, or s";
  }
}

let humanScore = 0;
let computerScore = 0;
const rounds = 5;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(`DRAW ROUND score: ${humanScore}:${computerScore}`);
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1) ||
    (humanChoice === 3 && computerChoice === 2)
  ) {
    humanScore++;
    alert(`YOU WON ROUND score: ${humanScore}:${computerScore}`);
  } else {
    computerScore++;
    alert(`YOU LOST ROUND score: ${humanScore}:${computerScore}`);
  }
}

for (let round = 1; round <= rounds; round++) {
  const humanChoice = getHumanChoice();
  if (typeof humanChoice === "string") {
    alert(humanChoice); // This will display the "Invalid choice" message.
    round--; // Repeat the round if the choice was invalid.
    continue;
  }
  const computerChoice = getComputerChoice();
  console.log(`Computer has chosen ${computerChoice}`);
  playRound(humanChoice, computerChoice);
}

alert(`FINAL SCORE: Human: ${humanScore}, Computer: ${computerScore}`);
