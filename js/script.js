function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

function computerPlay() {
    let computerResponseDigit = getRandomInt(3);
    let computerResponseString;
    switch(computerResponseDigit) {
        case 0:
            computerResponseString = "Rock";
            break;
        case 1:
            computerResponseString = "Paper";
            break;
        case 2:
            computerResponseString = "Scissors";
            break;
    }
    return computerResponseString;
}

for (let i = 0; i < 5; i++) {
    console.log(computerPlay());
}

