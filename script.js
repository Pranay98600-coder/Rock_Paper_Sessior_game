let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame =() => {
    console.log("Game Draw");
    msg.innerText = "Game was draw ! Play Again";
    msg.style.backgroundColor = "#081b31";};

const showWinner = (userwin,userChoice,compChoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
    compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if(userChoice === "rock"){
            userwin == compChoice === "paper" ?false:true;
        } else if(userChoice === "paper"){
            userwin == compChoice === "scissors"?false:true;
        }else{
            userwin == compChoice === "rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
        
    });
});
