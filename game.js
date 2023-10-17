let userWin = 0;
let compWin = 0;

const body = document.querySelector('#everything');
const roundResults = document.querySelector('.totResults')
const scoreAll = document.querySelector('#scoreEverything');
const currScore = document.querySelector('#currScore');
const endResult = document.querySelector('#result');
const buttonSec = document.querySelector('.buttonSec');

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
    const totResults = document.querySelector('.results');
    const currResult = document.createElement('li');
    currResult.textContent = message;
    totResults.appendChild(currResult);
}

function ending(){

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
        ++userWin;
    }
    else if(gameWin === 1){
        gameMessage =  `You Lost! ${computerSelection} beats ${playerSelection}!`;
        ++compWin;
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

const reset = function(){
    roundResults.removeChild(document.querySelector('.results'));
    buttonSec.removeChild(document.querySelector(".fourButt"));

    const newTotResult = document.createElement('ul');
    newTotResult.classList.add('results');
    const newButtonSec = document.createElement('div');
    newButtonSec.classList.add('fourButt');

    buttonSec.appendChild(newButtonSec);
    roundResults.appendChild(newTotResult);

    createButtons();
}


// Assumes sections for buttons is there and has class .buttonSec
function createButtons(){
    const btnSec = document.querySelector(".fourButt")

    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissors = document.createElement('button');
    const resButton = document.createElement('button');
    
    btnRock.textContent = 'Rock';
    btnPaper.textContent = 'Paper';
    btnScissors.textContent = 'Scissors';
    resButton.textContent = 'Reset';

    btnRock.id = "btnRock";
    btnPaper.id = "btnPaper";
    btnScissors.id = "btnScissors";
    resButton.id = 'resetButt';

    btnRock.addEventListener('click', () =>{
        playRound('rock', getComputerChoice());
    });
    btnPaper.addEventListener('click', () =>{
        playRound('paper', getComputerChoice());
    })
    btnScissors.addEventListener('click', () =>{
        playRound('scissors', getComputerChoice());
    })

    resButton.addEventListener('click', reset);

    btnSec.appendChild(btnRock);
    btnSec.appendChild(btnPaper);
    btnSec.appendChild(btnScissors);
    btnSec.appendChild(resButton);

}   

// for when the start button is pressed
const start = function(){
    body.removeChild(startButt);
    createButtons();
}

const startButt = document.querySelector('#start');
startButt.addEventListener('click', start);

