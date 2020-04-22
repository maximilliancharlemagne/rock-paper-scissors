let aiLastMove = 'rock'
let lastRoundResultAI = 'draw'
let first_round = true
let total_wins = 0
let total_losses = 0
let total_draws = 0

function gameHandler(userMove) {
  //takes in the user move and runs the game
  aiChoice = aiNextMove(first_round, aiLastMove, lastRoundResultAI)
  first_round ? first_round = false : first_round = false
  let arr = rpsHandler(userMove, aiChoice)
  aiLastMove = aiChoice
  lastRoundResultAI = arr[1]
  switch (arr[0]) {
    case 'win':
      total_wins++
      break;

    case 'lose':
      total_losses++
      break;

    case 'draw':
      total_draws++
      break;

    default:
      break;
  }

  document.getElementById("winLoseText").innerHTML = `It looks like you, the user, ${arr[0]}.`
  
  document.getElementById("count").innerHTML = `Wins: ${total_wins} Losses: ${total_losses} Draws: ${total_draws}`
}