function computerPlay(){
   let a= Math.floor(Math.random()*3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[a]
}

function playRound(playerSelection,computerSelection){
    if((playerSelection=='rock' && computerSelection=='scissors')||(playerSelection=='scissors'&&computerSelection=='paper')||(playerSelection=='paper'&&computerSelection=='rock')){
        return "Player Wins"
    }

}

const playerSelection=prompt("Choose paper,rock or scissors!").toLowerCase();
const computerSelection=computerPlay().toLocaleLowerCase();
console.log(computerPlay());
console.log(playRound())