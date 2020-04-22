function aiNextMove(isFirstMove, aiLastMove, lastRoundResult) {
  //isFirstMove, bool: Is it the first move?
  // true, false
  //aiLastMove, str: What did the AI play last round?
  // 'rock', 'paper', or 'scissors'
  //lastRoundResult, str: What was the result (for the AI), last round?
  // 'win', 'lose', 'draw'

  //Returns nextMove: 'rock', 'paper', or 'scissors'
  let nextMove
  let randomSeed
  if (isFirstMove) {
    randomSeed = Math.random()
    if (randomSeed < 0.29){
      nextMove = 'rock'
    }
    else if (randomSeed < 0.65){
      nextMove = 'paper'
    }
    else{
      nextMove = 'scissors'
    }
  }
  else {
    if (aiLastMove === 'rock'){
      if (lastRoundResult == 'win'){
        randomSeed = Math.random()
        if (randomSeed < 0.4){
          nextMove = 'rock'
        }
        else{
          nextMove = 'scissors'
        }
      }
      else if (lastRoundResult == 'draw'){
        randomSeed = Math.random()
        if (randomSeed < 0.29) {
          nextMove = 'rock'
        }
        else if (randomSeed < 0.65) {
          nextMove = 'paper'
        }
        else {
          nextMove = 'scissors'
        }
      }
      else{
        if (randomSeed < 0.2) {
          nextMove = 'paper'
        }
        else {
          nextMove = 'scissors'
        }
      }
    }

    if (aiLastMove === 'scissors') {
      if (lastRoundResult == 'win') {
        randomSeed = Math.random()
        if (randomSeed < 0.4) {
          nextMove = 'scissors'
        }
        else {
          nextMove = 'rock'
        }
      }
      else if (lastRoundResult == 'draw') {
        randomSeed = Math.random()
        if (randomSeed < 0.29) {
          nextMove = 'rock'
        }
        else if (randomSeed < 0.65) {
          nextMove = 'paper'
        }
        else {
          nextMove = 'scissors'
        }
      }
      else {
        if (randomSeed < 0.2) {
          nextMove = 'rock'
        }
        else {
          nextMove = 'paper'
        }
      }
    }

    if (aiLastMove === 'paper') {
      if (lastRoundResult == 'win') {
        randomSeed = Math.random()
        if (randomSeed < 0.4) {
          nextMove = 'paper'
        }
        else {
          nextMove = 'rock'
        }
      }
      else if (lastRoundResult == 'draw') {
        randomSeed = Math.random()
        if (randomSeed < 0.29) {
          nextMove = 'rock'
        }
        else if (randomSeed < 0.65) {
          nextMove = 'paper'
        }
        else {
          nextMove = 'scissors'
        }
      }
      else {
        if (randomSeed < 0.33) {
          nextMove = 'scissors'
        }
        else {
          nextMove = 'rock'
        }
      }
    }
  }
  return nextMove;
}