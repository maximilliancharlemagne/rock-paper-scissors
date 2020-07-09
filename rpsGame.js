let userWins = 0;
let userLosses = 0;
let userDraws = 0;

function gameHandler(userMove) {
  let seed = Math.random();

  if (seed < 0.33) {
    aiMove = "rock";
  } else if (seed < 0.67) {
    aiMove = "paper";
  } else {
    aiMove = "scissors";
  }

  let result = rpsResolver({ user: userMove, ai: aiMove });

  switch (result.user) {
    case "win":
      userWins++;
      break;

    case "lose":
      userLosses++;
      break;

    case "draw":
      userDraws++;
      break;

    default:
      break;
  }

  document.getElementById(
    "winLoseText"
  ).innerHTML = `It looks like you, the user, ${result.user}.`;

  document.getElementById(
    "count"
  ).innerHTML = `Wins: ${userWins} Losses: ${userLosses} Draws: ${userDraws}`;
}
