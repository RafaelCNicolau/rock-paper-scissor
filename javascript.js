function computerPlay(){
   let a= Math.floor(Math.random()*3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[a]
}

function playRound(playerSelection,computerSelection){
    if((playerSelection == 'rock' && computerSelection == 'scissors')||(playerSelection == 'scissors' && computerSelection == 'paper')||(playerSelection == 'paper' && computerSelection == 'rock')){
        return "Player Wins"
    }if((computerSelection == 'rock' && playerSelection == 'scissors')||(computerSelection == 'scissors' && playerSelection == 'paper')||(computerSelection == 'paper' && playerSelection == 'rock')){
        return "Computer Wins"
    }else{
        return "Draw"
    }

}
function game(playRound){
    let player=0
    let computer=0
    for(x=1;x<=5;x++){
        winner=playRound()
        if(winner=='Player Wins'){
            player+=1
        }else if(winner=='Computer Wins'){
            computer+=1
        } 
    }

}
const playerSelection=prompt("Choose paper,rock or scissors!").toLowerCase();
const computerSelection=computerPlay().toLowerCase();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection))