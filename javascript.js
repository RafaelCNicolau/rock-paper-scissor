let player=0;
let computador=0;
for(x=0;x<5;x++){
function computerPlay(){
   let a= Math.floor(Math.random()*3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[a]
}
function game(playerSelection,computerSelection){
    
    
    function playRound(){
    
    
        if((playerSelection == 'rock' && computerSelection == 'scissors')||(playerSelection == 'scissors' && computerSelection == 'paper')||(playerSelection == 'paper' && computerSelection == 'rock')){
            player++
            return "Player Wins"
    }if((computerSelection == 'rock' && playerSelection == 'scissors')||(computerSelection == 'scissors' && playerSelection == 'paper')||(computerSelection == 'paper' && playerSelection == 'rock')){
        computador++
        return "Computer Wins"
    }else{
        return "Draw"
        }
    }
    return playRound()

}



const computerSelection=computerPlay().toLowerCase();
const playerSelection=prompt("Choose paper,rock or scissors!").toLowerCase();
console.log(computerSelection)

game(playerSelection,computerSelection)
console.log(player);
console.log(computador);
}
if(computador>player){
    console.log("Computer Wins")
}else if(player>computador){
    console.log("Player Wins")
}else{
    console.log("Draw")
}