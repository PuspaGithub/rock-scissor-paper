let options = {
    "1":"rock",
    "2":"paper",
    "3":"scissor"
}

let user_input = prompt("Enter your Choice").toLowerCase();
let randomNumber = Math.floor(Math.random()*3)+1;
let computer = options[randomNumber];

if (user_input === computer){
    console.log("It\'s a tie.")
}

if (
    (user_input === "rock" && computer === "scissor") ||
    (user_input === "scissor" && computer === "paper") ||
    (user_input === "paper" && computer === "rock")
){
    console.log("You win!!")
} else {
    console.log("Computer Wins!!!")
}

