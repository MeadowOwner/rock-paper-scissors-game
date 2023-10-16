const totResults = document.querySelector(".results")

function getComputerChoice(){
    let compChoice = "";
    let compChoiceNum = Math.floor(Math.random() * 3);
    if(compChoiceNum === 0){
        compChoice = "Rock";
    }
    else if(compChoiceNum === 1){
        compChoice = "Paper";
    }
    else{
        compChoice = "Scissors";
    }
    return compChoice;
}

function addResult(message){
    const currResult = document.createElement('li');
    currResult.textContent = message;
    totResults.appendChild(currResult);
}



function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // just to make sure that user input will be treated the same
    // regardless of uppercase or lowercase
    let gameWin = 0;
    // gameWin is 0 in a win, 1 in a loss, and 2 in a tie
    let gameMessage = "";
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "Rock":
                    gameWin = 2;
                    break;
                case "Paper":
                    gameWin = 1;
                    break;
                default:
                    gameWin = 0;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "Rock": 
                    gameWin = 0;
                    break;
                case "Paper":
                    gameWin = 2;
                    break;
                default: 
                    gameWin = 1;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "Rock": 
                    gameWin = 1;
                    break;
                case "Paper":
                    gameWin = 0;
                    break;
                default:
                    gameWin = 2;
            }
            break;
        default:
            gameWin = -1;
    }

    // This section is to make the playerSelection's first letter uppercase
    playerSelection = playerSelection.at(0).toUpperCase().concat(playerSelection.slice(1));

    if(gameWin === 0){
        gameMessage = `You Won!! ${playerSelection} beats ${computerSelection}!`;
    }
    else if(gameWin === 1){
        gameMessage =  `You Lost! ${computerSelection} beats ${playerSelection}!`;
    }
    else if(gameWin === 2){
        gameMessage =  `You Tied! Both you and the computer chose ${computerSelection}!`;
    }
    else{
        gameMessage = `invalid input`;
    }
    addResult(gameMessage);
    return gameWin;
}


// Assumes sections for buttons is there and has class .buttonSec
function createButtons(){
    const btnSec = document.querySelector(".buttonSec")

    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissors = document.createElement('button');
    
    btnRock.textContent = 'Rock';
    btnPaper.textContent = 'Paper';
    btnScissors.textContent = 'Scissors';

    btnRock.id = "btnRock";
    btnPaper.id = "btnPaper";
    btnScissors.id = "btnScissors";

    btnRock.addEventListener('click', () =>{
        playRound('rock', getComputerChoice());
    });
    btnPaper.addEventListener('click', () =>{
        playRound('paper', getComputerChoice());
    })
    btnScissors.addEventListener('click', () =>{
        playRound('scissors', getComputerChoice());
    })

    btnSec.appendChild(btnRock);
    btnSec.appendChild(btnPaper);
    btnSec.appendChild(btnScissors);

}   

// for when the start button is pressed
const start = function(){
    createButtons();
}

const startButt = document.querySelector('#start');
startButt.addEventListener('click', start);
