
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

playGame();