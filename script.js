let options = {
    "1":"rock",
    "2":"paper",
    "3":"scissor"
}

let rounds = 5;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return `It's a Tie. Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`;
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        return `User Wins. Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`;
    } else {
        return `Computer Wins. Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`;
    }
}

// This function takes & return human choice
function getHumanChoice() {
    let user_input = prompt("Enter your Choice").toLowerCase();
    return user_input;
}

// This function gets computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;  
    return options[randomNumber];
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

// Ends here