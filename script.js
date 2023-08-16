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

function playRound(playerSelection, computerSelection) {
    playerSelection = btn.value;
    computerSelection = getComputerChoice();
    if (playerSelection==computerSelection) {
        return("It's a tie!");
    } else if (playerSelection=="rock" && computerSelection=="scissors") {
        return("You win! Rock beats scissors.");
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        return("You lose! Paper beats rock.")
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        return("You lose! Scissors beat paper.")
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        return("You win! Paper beats rock.")
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        return("You win! Scissors beats paper.")
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        return("You lose! Rock beats scissors.")
    } else {
        return("Please enter a valid weapon (rock, paper, scissors).")
    }
}

let playerSelection;
const computerSelection = getComputerChoice();

const container = document.querySelector(".container");

const rock = document.createElement("button");
rock.textContent = "rock";

const paper = document.createElement("button");
paper.textContent = "paper";

const scissors = document.createElement("button");
scissors.textContent = "scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);







