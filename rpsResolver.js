function rpsResolver(moveObject) {
  //Takes a moveObject of the form:
  // {user: 'rock', AI: 'scissors'}

  //Returns an object with the user's result, and the AI's result, of the form:
  // {user: 'win', AI: 'lose'}

  let userMove = moveObject.user;
  let aiMove = moveObject.ai;

  if (userMove === aiMove) {
    return {
      user: "draw",
      ai: "draw",
    };
  } else if (
    (userMove == "rock" && aiMove == "scissors") ||
    (userMove == "scissors" && aiMove == "paper") ||
    (userMove == "paper" && aiMove == "rock")
  ) {
    return {
      user: "win",
      ai: "lose",
    };
  } else {
    return {
      user: "lose",
      ai: "win",
    };
  }
}
