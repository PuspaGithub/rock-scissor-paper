const btnContainer = document.querySelector("#button-container");
const computer = document.querySelector("#computer");
const humnScr = document.querySelector("#humanScore");
const comptScr = document.querySelector("#computerScore");

let options = {
    "1":"rock",
    "2":"paper",
    "3":"scissor"
}
let humanScore = 0;
let computerScore = 0;

btnContainer.addEventListener("click", (e)=> {
    if(e.target.tagName === "BUTTON"){
        let userInput = e.target.id
        //console.log(userInput);
        let computerChoice = getComputerChoice();
        //console.log(computerChoice);
        computer.textContent = computerChoice.toUpperCase();

        //playRound
        console.log(playRound(userInput, computerChoice))

        humnScr.textContent = humanScore;
        comptScr.textContent = computerScore;

        console.log(`Human Score is ${humanScore}`);
        console.log(`Computer Score is ${computerScore}`);

        let winner = humanScore > computerScore ? "Human" : "Computer";

        if(humanScore === 5 || computerScore === 5) {
            const refreshButton = document.createElement("button");
            refreshButton.textContent = "Play More";
            refreshButton.addEventListener("click", ()=> {
                location.reload();
            });
            document.body.innerHTML = `<h1>${winner} Won, Refresh the page if you want to play more<h1>`;
            document.body.appendChild(refreshButton);
        }
    }

})


// This function gets computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;  
    return options[randomNumber];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return `It's a Tie. Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`;
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        return `User Wins. Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`;
    } else {
        computerScore++;
        return `Computer Wins. Computer Choice - ${computerChoice} & Human Choice - ${humanChoice}`;
    }
}


/*


let rounds = 5;



// This function takes & return human choice
function getHumanChoice() {
    let user_input = prompt("Enter your Choice").toLowerCase();
    return user_input;
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

// Ends here
*/