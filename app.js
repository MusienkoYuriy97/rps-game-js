let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s")

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.round(Math.random() * 2);
    return choices[randomNumber];
}

function toWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${toWord(userChoice)} beats ${toWord(computerChoice)}.<br>You win!&#9989;`
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500)
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${toWord(computerChoice)} beats ${toWord(userChoice)}.<br>You lose!&#10060`
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500)
}

function draw(userChoice){
    const userChoice_div = document.getElementById(userChoice)
    result_div.innerHTML = `Draw &#9996;`
    userChoice_div.classList.add('gray-glow')
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();