////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerAnswer;

function PlayerMove(move) {

    
    
   move = randomPlay();
   
    console.log(move);
    if (move == "rock" || move == "Rock"){
        playerAnswer = "rock";
        return "rock";
    }
    else if (move == "paper" || move == "Paper"){
        playerAnswer = "paper";
        return "paper";
    }
    else if (move == "scissors" || move == "Scissors"){
        playerAnswer = "scissors";
        return "scissors";
    }
    else {
        alert("Invalid Input.");
		return;
    }
    
    return move;
}

var computerAnswer;

function ComputerMove(move) {

    move = randomPlay();
    console.log(move);
    if (move === "rock") {
        computerAnswer = "rock";
        return "rock";
    }
    if (move === "paper") {
        computerAnswer = "paper";
        return "paper";
    }
    if (move === "scissors") {
        computerAnswer = "scissors";
        return "scissors";
    }
    
    else {
        getInput();
    }
    
    return move;
    
}

var playerWins = 0;
var computerWins = 0;
	
function getWinner(playerMove,computerMove) {
    var winner;
   
   if(playerAnswer == "rock" && computerAnswer == "scissors"){
	   winner = "player";
	   playerWins++;
	   $('#player-score').text(playerWins);
	   $('#update').text('Player Won Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'rock-1.jpg');
	   $('#c-img').attr('src', 'scissors-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('rock');
	   $('#c-move').text('scissors');
   }
   else if(playerAnswer == "rock" && computerAnswer == "rock"){
		winner = "tie";
		$('#update').text('Tie Last Round.');
		
<<<<<<< HEAD
		$('#p-img').attr('src', 'rock-1.jpg');
		$('#c-img').attr('src', 'rock-2.jpg');
		
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	    $('#p-move').text('rock');
	    $('#c-move').text('rock');
   }
   else if(playerAnswer == "rock" && computerAnswer == "paper"){
	   winner = "computer";
	   computerWins++;
	   $('#cpu-score').text(computerWins);
	   $('#update').text('Computer Won Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'rock-1.jpg');
	   $('#c-img').attr('src', 'paper-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('rock');
	   $('#c-move').text('paper');
   }
   else if(playerAnswer == "paper" && computerAnswer == "scissors"){
	   winner = "computer";
	   computerWins++;
	   $('#cpu-score').text(computerWins);
	   $('#update').text('Computer Won Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'paper-1.jpg');
	   $('#c-img').attr('src', 'scissors-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('paper');
	   $('#c-move').text('scissors');
   }
   else if(playerAnswer == "paper" && computerAnswer == "rock"){
	   winner = "player";
	   playerWins++;
	   $('#player-score').text(playerWins);
	   $('#update').text('Player Won Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'paper-1.jpg');
	   $('#c-img').attr('src', 'rock-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('paper');
	   $('#c-move').text('rock');
   }
   else if(playerAnswer == "paper" && computerAnswer == "paper"){
	   winner = "tie";
	   $('#update').text('Tie Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'paper-1.jpg');
	   $('#c-img').attr('src', 'paper-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('paper');
	   $('#c-move').text('paper');
   }
   else if(playerAnswer == "scissors" && computerAnswer == "scissors"){
	   winner = "tie";
	   $('#update').text('Tie Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'scissors-1.jpg');
	   $('#c-img').attr('src', 'scissors-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('scissors');
	   $('#c-move').text('scissors');
   }
   else if(playerAnswer == "scissors" && computerAnswer == "rock"){
	   winner = "tie";
	   computerWins++;
	   $('#cpu-score').text(computerWins);
	   $('#update').text('Computer Won Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'scissors-1.jpg');
	   $('#c-img').attr('src', 'rock-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('scissors');
	   $('#c-move').text('rock');
   }
   else if(playerAnswer == "scissors" && computerAnswer == "paper"){
	   winner = "player";
	   playerWins++;
	   $('#player-score').text(playerWins);
	   $('#update').text('Player Won Last Round.');
	   
<<<<<<< HEAD
	   $('#p-img').attr('src', 'scissors-1.jpg');
	   $('#c-img').attr('src', 'paper-2.jpg');
	   
=======
>>>>>>> 24397f00bed40c6c25b09eb2ed6250fc4c2d54f1
	   $('#p-move').text('scissors');
	   $('#c-move').text('paper');
   }
   else {
	   getInput();
   }  
  
}

function playToFive() {
	
	PlayerMove();
	ComputerMove();
	getWinner();
	
	
	
	if(playerWins > computerWins) {
		$('#board').text('Player is in the lead!');
	}
	if(playerWins < computerWins) {
		$('#board').text('Computer is in the lead!');
	}
	if(playerWins == computerWins) {
		$('#board').text('It\'s currently a tie!');
	}
	
	//
	
	if(playerWins == 4 && computerWins == 4){
		$('#message').text('Next Score Wins! Who Will It Be!?');
	}
	
	//
	
    if(playerWins == 5){
		alert("Player Is The Winner!!!");
		$('#message').text('Player Wins!!!');
		playerWins = 0;
		computerWins = 0;
		
		setTimeout(function(){
			$('#message').text('');
			$('#board').text('');
			$('#update').text('');
			$('#p-move').text('');
			$('#c-move').text('');
			$('#player-score').text(playerWins);
			$('#cpu-score').text(computerWins);
			$('#p-img').attr('src', '');
			$('#c-img').attr('src', '');
		}, 4000);
		
	}
	if(computerWins == 5){
		alert("Computer Is The Winner!!!");
		$('#message').text('Computer Wins!!!');
		playerWins = 0;
		computerWins = 0;
		
		setTimeout(function(){
			$('#message').text('');
			$('#board').text('');
			$('#update').text('');
			$('#p-move').text('');
			$('#c-move').text('');
			$('#player-score').text(playerWins);
			$('#cpu-score').text(computerWins);
			$('#p-img').attr('src', '');
			$('#c-img').attr('src', '');
		}, 4000);
		
	}

}

