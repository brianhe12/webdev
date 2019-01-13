const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput != 'rock' && userInput != 'paper' && userInput != 'scissors'){
    console.log('Error');
  }
  else{
    console.log(`Player chose ${userInput}`)
    return userInput;
  }
};

const getComputerChoice = () =>{
  var AIchoice = Math.floor(Math.random() * 3)
  switch(AIchoice) {
    case 0:
      console.log('Computer chose rock');
      return 'rock';
    case 1:
      console.log('Computer chose paper');
      return 'paper';
    case 2:
      console.log('Computer chose scissors');
      return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice){
  if(userChoice == computerChoice)
    {
      console.log('Game is tie')
      return 'The game is a tie!';
    }
  
  if(userChoice == 'rock' && computerChoice != 'paper')
    {
      console.log('User Wins');
      return 'You win';
    }
  if(userChoice == 'paper' && computerChoice != 'scissors')
    {
      console.log('User Wins');
      return 'You win';
    }
  if(userChoice == 'scissors' && computerChoice != 'rock')
    {
      console.log('User Wins');
      return 'You win';
    }
  else
    {
      console.log('User Lose');
      return 'You lose';
    }
  
}

//var choice = prompt('Please choose an option: Rock, Paper, Scissors');
var choice = getUserChoice('rock');
determineWinner(choice, getComputerChoice());









