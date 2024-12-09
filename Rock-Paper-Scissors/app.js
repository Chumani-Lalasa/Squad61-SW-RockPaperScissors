const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".button");
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score');
const restartBtn = document.getElementById('restart-btn');
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

restartBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userChoiceDisplay.innerHTML = "None";
    computerChoiceDisplay.innerHTML = "None";
    resultDisplay.innerHTML = "Start a new game!!";
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
})

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))


function generateComputerChoice(){ 
    let avalableChoices = ['rock', 'paper', 'scissors'];
    computerChoice = avalableChoices[Math.floor(Math.random()*3)]
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice == userChoice){
        result = "It's a tie";
    }else if(computerChoice == "rock"){
        if(userChoice == "scissors"){
            result = "Computer Won";
            computerScore++;
        }else if(userChoice == "paper"){
            result = "User Won!!"
            userScore++;
        }
    }else if(computerChoice == "paper"){
        if(userChoice == "scissors"){
            result = "user won!!";
            userScore++;
        }else if(userChoice == "rock"){
            result = "Computer won!!";
            computerScore++;
        }
    }else if(computerChoice == "scissors"){
        if(userChoice == "rock"){
            result = "User won!!";
            userScore++;
        }else{
            result = "Computer won!!";
            computerScore++;
        }
    }
    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}
// getResult(userChoice, computerChoice);