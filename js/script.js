function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

function computerPlay() {
    let computerResponseDigit = getRandomInt(3);
    let computerResponseString;
    switch(computerResponseDigit) {
        case 0:
            computerResponseString = "rock";
            break;
        case 1:
            computerResponseString = "paper";
            break;
        case 2:
            computerResponseString = "scissors";
            break;
    }
    return computerResponseString;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You Win! Rock beats Scissors`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You Lose! Rock beats Scissors`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You Win! Paper beats Rock`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You Lose! Paper beats Rock`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You Win! Scissors beats Paper`);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You Lose! Scissors beats Paper`);
    } else {
        console.log(`Draw`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your choice (Rock, Paper, Scissors): ");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
}

game();