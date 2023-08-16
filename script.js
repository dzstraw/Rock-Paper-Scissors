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

const btn = document.querySelectorAll(".btn");
btn.addEventListener('click', () => {
    playerSelection = btn.textContent;
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
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        result.textContent = "You lose! Paper beats rock.";
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        result.textContent = "You lose! Scissors beat paper.";
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        result.textContent = "You win! Paper beats rock.";
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        result.textContent = "You win! Scissors beats paper.";
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        result.textContent = "You lose! Rock beats scissors.";
    } else {
        result.textContent = "Please enter a valid weapon (rock, paper, scissors).";
    }
}



