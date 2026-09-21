let options = {
    "1":"rock",
    "2":"paper",
    "3":"scissor"
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return [`Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`, computerScore, humanScore];
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        return [`Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`, computerScore, humanScore];
    } else {
        computerScore++;
        return [`Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`, computerScore, humanScore];
    }
}

// This function takes & return human choice
function getHumanChoice() {
    let user_input = prompt("Enter your Choice either Rock, Scissor or Paper.").toLowerCase();
    return user_input;
}

// This function gets computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;  
    return options[randomNumber];
}
let choices='';
let humnScr = 0;
let compScr = 0;

for(i=0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const[choic, coScr, huScr] = playRound(humanSelection, computerSelection);
    choices = choices+ "\n" +choic;
    humnScr=huScr;
    compScr=coScr;
}



console.log(choices);
console.log(humnScr);
console.log(compScr);

if(compScr === humnScr){
    console.log('its a tie');
} else if (compScr > humnScr){
    console.log('Computer Wins');
} else {
    console.log('Human Wins');
}


// Ends here