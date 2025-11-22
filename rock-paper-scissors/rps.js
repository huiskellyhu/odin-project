// ---------------------------------------
// ---- NEWEST CODE AT BOTTOM OF FILE ----
// ---------------------------------------


// randomly returns "rock", "paper", or "scissors"
function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);

    if(result == 0){
        return "rock";
    } else if (result == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// gets user's choice, assume valid choice
function getHumanChoice(){
    return prompt("Rock, Paper, Scissors?");
}


// play whole game
function playGame(){
    // function to play one round
    function playRound(humanChoice, computerChoice){
        // case-insensitive humanChoice
        let lowerHumanChoice = humanChoice.toLowerCase();
        let lowerComputerChoice = computerChoice.toLowerCase();

        // hold winning announcement
        let announcement = "";

        if (lowerHumanChoice == lowerComputerChoice){
            console.log("Tie!");
            return;
        } else if ((lowerHumanChoice == "rock" && lowerComputerChoice == "scissors") || 
                (lowerHumanChoice == "paper" && lowerComputerChoice == "rock")     ||
                (lowerHumanChoice == "scissors" && lowerComputerChoice == "paper")) {
                    announcement = `You win! ${humanChoice} beats ${computerChoice}.`;
                    humanScore++;
                }
        else {
            announcement = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }

        // display announcement
        console.log(announcement);
    }
    
    let humanScore = 0;
    let computerScore = 0;

    // play 5 rounds
    for (let i=0; i<5; i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();

        playRound(human, computer);
    }

    // overall winner announcement
    if (humanScore == computerScore){
        console.log("It's a tie!");
    } else {
        console.log(`${humanScore > computerScore ? "You" : "Computer"} won the game!`);
    }

}

// playGame();

// OLD CODE FOR CONSOLE.LOG RPS GAME ABOVE
// NEW CODE FOR RPS-UI BELOW
//  Note: Duplicate logic for clarity + new structure

function convertHumanChoice(humanChoice){
    // choices: user-rock, user-paper, user-scissors
    return humanChoice.split('-')[1];
}

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playNewRound(humanChoice){
    // extract rock/paper/scissors from user-choice
    humanChoice = convertHumanChoice(humanChoice);
    const computerChoice = getComputerChoice();
    
    let announcement = document.getElementById("announcement")
    // returns:
    //  tie: 0
    //  humanWin = 1
    //  computerWin = -1
    if (humanChoice === computerChoice){
            announcement.textContent = "Tie!";
            return 0;
        } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
                (humanChoice == "paper" && computerChoice == "rock")     ||
                (humanChoice == "scissors" && computerChoice == "paper")) {
                    announcement.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} 
                                                beats ${capitalizeFirstLetter(computerChoice)}.`;
                    return 1;
                }
        else {
            announcement.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} 
                                        beats ${capitalizeFirstLetter(humanChoice)}.`;
            return -1;
        }
    
}

function displayCurrentScore(humanScore, computerScore){
    const score = document.getElementById("score");
    score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
}

function displayWinner(humanScore, computerScore){
    const winner = humanScore > computerScore ? "You" : "Computer";

    const result = document.getElementById("result");
    const finalWinner = document.createElement("p");
    finalWinner.textContent = "Final Winner: " + winner;
    result.appendChild(finalWinner);
}


document.addEventListener('DOMContentLoaded', () => {
    const userSelection = document.getElementById("user-selection");

    let humanScore = 0;
    let computerScore = 0;
    let result = 0;

    function handleButtonClick(event){
        if(event.target.tagName === 'BUTTON'){
            let humanChoice = event.target.id;
            
            result = playNewRound(humanChoice);
            if (result === 1){
                humanScore++;
            } else if (result === -1){
                computerScore++;
            }
            if (result != 0){
                displayCurrentScore(humanScore, computerScore);
            }

            if (humanScore === 5 || computerScore === 5){
                displayWinner(humanScore, computerScore);
                userSelection.removeEventListener('click', handleButtonClick);
            }
        }
    }
    userSelection.addEventListener("click", handleButtonClick);
});