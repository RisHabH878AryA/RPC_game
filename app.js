const choices = document.querySelectorAll(".choice"); // Use ".choice" to select elements with class "choice"
const msg = document.querySelector("#msg");
const userS = document.querySelector("#user-score");
const compS = document.querySelector("#Comp-score");
const reset = document.querySelector("#reset");

let userScore = 0;
let compScore = 0;

function initialScore() {
    userScore = 0;
    compScore = 0;
    userS.innerHTML = userScore;
    compS.innerHTML = compScore;
};

reset.addEventListener("click", initialScore);

const choicefunc = (event) => {
    let userChoice = event.currentTarget.getAttribute("id");
    let compChoice = compchoice();
    check(userChoice, compChoice);
};

function comprandom() {
    return Math.floor(Math.random() * 3);
};

function compchoice() {
    let chlist = ["rock", "paper", "scissor"];
    return chlist[comprandom()];
};

const userchoice = (choiceElement) => {
    choiceElement.addEventListener("click", choicefunc);
};

choices.forEach(userchoice);

function check(userChoice, compChoice) {
    if (userChoice === compChoice) {
        msg.innerHTML = "Draw";
    } else if (userChoice == "rock" && compChoice == "paper") {
        msg.innerHTML = "Comp wins<br>Comp : paper<br>You : rock";
        compScore++;
    } else if (userChoice == "rock" && compChoice == "scissor") {
        msg.innerHTML = "You win<br>Comp : scissor<br>You : rock";
        userScore++;
    } else if (userChoice == "scissor" && compChoice == "paper") {
        msg.innerHTML = "You win<br>Comp : paper<br>You : scissor";
        userScore++;
    } else if (userChoice == "scissor" && compChoice == "rock") {
        msg.innerHTML = "Comp wins<br>Comp : paper<br>You : scissor";
        compScore++;
    } else if (userChoice == "paper" && compChoice == "rock") {
        msg.innerHTML = "You win<br>Comp : rock<br>You : paper";
        userScore++;
    } else if (userChoice == "paper" && compChoice == "scissor") {
        msg.innerHTML = "Comp wins<br>Comp : scissor<br>You : paper";
        compScore++;
    }

    userS.innerHTML = userScore;
    compS.innerHTML = compScore;
};
