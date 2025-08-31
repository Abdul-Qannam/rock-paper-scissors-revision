let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function(comChoice){
    let choices=['rock','paper','scissors'];
    let ranChoice = Math.floor(Math.random()*3);
    return choices[ranChoice];
}

let getHumanChoice = function(humChoice = prompt("Rock, Paper, Scissors?!","")){
    let humanChoice = humChoice.toLowerCase();
    

    return humanChoice;
}

playRound => (humanChoice,computerChoice) => {
    if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log("You won! Rock beats Scissors.");
    humanScore++; 
    }
    else if (humanChoice =='scissors' && computerChoice=='rock'){
        console.log("you lost. Rock beats Scissors");
        computerScore++;
    }
    else if (humanChoice == 'paper' && computerChoice=='rock'){
        console.log("you won! Paper beats Rock!");

        humanScore++;
    }
    else if(humanChoice =='rock' && computerChoice == 'paper'){
        console.log("you lost. Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice =="scissors" && computerChoice == "paper"){
        console.log("you won! Scissors beats Paper!");
        humanScore++;
    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("you lost. Scissors beats Paper.")
        computerScore++;
    }
    
}


playGame => () => {
    for(i=0;i<5;i++){
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
    }
    if (humanScore>computerScore){
        console.log("**************");
        console.log("you've won the game!");
        console.log("**************");
    }
    else if (computerScore > humanScore){
        console.log("**************");
        console.log("you've won the game!");
        console.log("**************");
    }
    
}