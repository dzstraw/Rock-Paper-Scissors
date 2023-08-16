let playerSelection;

const container = document.querySelector(".container");

const rock = document.createElement("button");
rock.classList.add("btn");
rock.textContent = "rock";

const paper = document.createElement("button");
paper.classList.add("btn");
paper.textContent = "paper";

const scissors = document.createElement("button");
scissors.classList.add("btn");
scissors.textContent = "scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);


let result = document.createElement("div");
result.textContent = "result";
document.body.appendChild(result);

let playerScore = 0;
let computerScore = 0;



rock.addEventListener('click', () => {
    playRound("rock", computerSelection);
});

paper.addEventListener('click', () => {
    playRound("paper", computerSelection);
});

scissors.addEventListener('click', () => {
    playRound("scissors", computerSelection);
});

let playerScoreDisplay = document.createElement("div");
playerScoreDisplay.textContent = "Your score: " + playerScore;
document.body.appendChild(playerScoreDisplay);

let computerScoreDisplay = document.createElement("div");
computerScoreDisplay.textContent = "Your score: " + computerScore;
document.body.appendChild(computerScoreDisplay);

function getComputerChoice() {
    choice = (Math.floor(Math.random()*3))+1;
    if (choice==1) {
        return("rock")
    } else if (choice==2) {
        return("paper")
    } else {
        return("scissors")
    }
}

const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection==computerSelection) {
        result.textContent = "It's a tie!";
    } else if (playerSelection=="rock" && computerSelection=="scissors") {
        result.textContent = "You win! Rock beats scissors.";
        playerScore++;
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        result.textContent = "You lose! Paper beats rock.";
        computerScore++;
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        result.textContent = "You lose! Scissors beat paper.";
        computerScore++;
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        result.textContent = "You win! Paper beats rock.";
        playerScore++;
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        result.textContent = "You win! Scissors beats paper.";
        playerScore++;
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        result.textContent = "You lose! Rock beats scissors.";
        computerScore++;
    } else {
        result.textContent = "Please enter a valid weapon (rock, paper, scissors).";
    }
}



