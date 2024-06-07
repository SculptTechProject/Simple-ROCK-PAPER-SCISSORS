document.addEventListener("DOMContentLoaded", () => {
  function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoice);
    return computerChoice;
  }

  function getHumanChoice(choice) {
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

  const maxScore = 10;

  let humanScore = 0;
  let computerScore = 0;

  const computerScoreDiv = document.getElementById("computerScore");
  const humanScoreDiv = document.getElementById("humanScore");

  const displayContent = document.getElementById("content");

  function changeComputerScore(computerScore) {
    computerScoreDiv.innerHTML = `${computerScore}`;
  }

  function changeHumanScore(humanScore) {
    humanScoreDiv.innerHTML = `${humanScore}`;
  }

  function winner(computerScore, humanScore) {
    if (computerScore === maxScore) {
      displayContent.innerHTML = "PC WON :(";
      alert("PC WON :( REFRESH PAGE TO PLAY AGAIN!");
    } else if(humanScore === maxScore) {
      displayContent.innerHTML = "YOU WON!!!";
      alert("YOU WON!!! REFRESH THE PAGE TO PLAY AGAIN")
    }
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      displayContent.innerHTML = "DRAW";
    } else if (
      (humanChoice === 1 && computerChoice === 3) ||
      (humanChoice === 2 && computerChoice === 1) ||
      (humanChoice === 3 && computerChoice === 2)
    ) {
      displayContent.innerHTML = "You got a point!";
      humanScore++;
      changeHumanScore(humanScore);
    } else {
      displayContent.innerHTML = "PC got a point!";
      computerScore++;
      changeComputerScore(computerScore);
    }

    winner(computerScore, humanScore);
  }

  const rockBtn = document.getElementById("rockBtn");
  const paperBtn = document.getElementById("paperBtn");
  const scissorsBtn = document.getElementById("scissorsBtn");

  rockBtn.addEventListener("click", () => {
    const humanChoice = getHumanChoice("r");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("You chose Rock");
  });

  paperBtn.addEventListener("click", () => {
    const humanChoice = getHumanChoice("p");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("You chose Paper");
  });

  scissorsBtn.addEventListener("click", () => {
    const humanChoice = getHumanChoice("s");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("You chose Scissors");
  });
});
