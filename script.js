const player_score = document.getElementById("player_score")
const computer_score = document.getElementById("computer_score");


const player_result = document.getElementById("player_result");
const computer_result = document.getElementById("computer_result");



function play(choice){

    let player_choice = playerChoice(choice);
    let computer_choice = computerChoice(); 
    console.log(player_result.innerHTML, computer_result.innerHTML)
    verify(player_choice, computer_choice);
    

}

function verify(player_choice, computer_choice){
    if(player_choice == "paper" & computer_choice == "rock"){
        player_score.Text = player_score.innerText++;
    }
    if(player_choice == "rock" & computer_choice == "scissors"){
        player_score.Text = player_score.innerText++;
    }
    if(player_choice == "scissors" & computer_choice == "paper"){
        player_score.Text = player_score.innerText++;
    }
    if(player_choice == "paper" & computer_choice == "scissors"){
        computer_score.Text = computer_score.innerText++;
    }
    if(player_choice == "rock" & computer_choice == "paper"){
        computer_score.Text = computer_score.innerText++;
    }
    if(player_choice == "scissors" & computer_choice == "rock"){
        computer_score.Text = computer_score.innerText++;
    }

    if(player_choice == "rock"){

        player_result.innerText = "✊";
    }
    if(player_choice == "paper"){

        player_result.innerText = "✋";
    }
    if(player_choice == "scissors"){
       
        player_result.innerText = "✌️";
    }

    if(computer_choice == "rock"){

        computer_result.innerText = "✊";
    }
    if(computer_choice == "paper"){
  
        computer_result.innerText = "✋";
    }
    if(computer_choice == "scissors"){

        computer_result.innerText = "✌️";
    }
}

function playerChoice(choice){
    let x;

    if(choice == rock){
        x = "rock";
    }

    if(choice == paper){
        x = "paper";
    }
        
    if(choice == scissors){
        x = "scissors";
    }

    return x;

}

function computerChoice(){
    let x;
    let i = Math.floor(Math.random()*3);
    if(i == 0)
        x = "rock";
    if(i == 1)
        x = "paper";
    if(i == 2)
        x = "scissors";

    return x;
}

