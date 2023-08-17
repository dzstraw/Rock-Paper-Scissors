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

let playerScoreDisplay = document.createElement("div");
playerScoreDisplay.textContent = "Your score: " + playerScore;
document.body.appendChild(playerScoreDisplay);

let computerScoreDisplay = document.createElement("div");
computerScoreDisplay.textContent = "Computer score: " + computerScore;
document.body.appendChild(computerScoreDisplay);

let winnerDisplay = document.createElement("STRONG");
winnerDisplay.textContent = "";
document.body.appendChild(winnerDisplay);


// When a button is clicked, the round is played according to the button //
rock.addEventListener('click', () => {
    playRound("rock", computerSelection);
    if (playerScore==5) {
        winnerDisplay.textContent = "You win! Refresh the page to play again.";
    }
    if (computerScore==5) {
        winnerDisplay.textContent = "You lost... Refresh the page to try again.";
    }

});

paper.addEventListener('click', () => {
    playRound("paper", computerSelection);
    if (playerScore==5) {
        winnerDisplay.textContent = "You win! Refresh the page to play again.";
    }
    if (computerScore==5) {
        winnerDisplay.textContent = "You lost... Refresh the page to try again.";
    }
});

scissors.addEventListener('click', () => {
    playRound("scissors", computerSelection);
    if (playerScore==5) {
        winnerDisplay.textContent = "You win! Refresh the page to play again.";
    }
    if (computerScore==5) {
        winnerDisplay.textContent = "You lost... Refresh the page to try again.";
    }
});






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
        playerScoreDisplay.textContent = "Your score: " + playerScore;
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        result.textContent = "You lose! Paper beats rock.";
        computerScore++;
        computerScoreDisplay.textContent = "Computer score: " + computerScore;
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        result.textContent = "You lose! Scissors beat paper.";
        computerScore++;
        computerScoreDisplay.textContent = "Computer score: " + computerScore;
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        result.textContent = "You win! Paper beats rock.";
        playerScore++;
        playerScoreDisplay.textContent = "Your score: " + playerScore;
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        result.textContent = "You win! Scissors beats paper.";
        playerScore++;
        playerScoreDisplay.textContent = "Your score: " + playerScore;
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        result.textContent = "You lose! Rock beats scissors.";
        computerScore++;
        computerScoreDisplay.textContent = "Computer score: " + computerScore;
    } else {
        result.textContent = "Please enter a valid weapon (rock, paper, scissors).";
    }
}

