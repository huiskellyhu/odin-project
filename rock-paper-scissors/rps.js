
// randomly returns "rock", "paper", or "scissors"
function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);

    if(result == 0){
        return "Rock";
    } else if (result == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

// gets user's choice, assume valid choice
function getHumanChoice(){
    return prompt("Rock, Paper, Scissors?");
}


// play one round
function playRound(humanChoice, computerChoice){
    // case-insensitive humanChoice
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();

    // hold winning announcement
    let announcement = "";

    if (lowerHumanChoice == lowerComputerChoice){
        console.log("Tie!");
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

human = getHumanChoice();
computer = getComputerChoice();

playRound(human, computer);