function rpsHandler(userMove,aiMove){
  //Takes userMove and aiMove, strings of the format
  // 'rock', 'paper', or 'scissors'

  //Returns an array [resultForUser,resultForAI]
  if(userMove === aiMove){
    return ['draw','draw']
  }
  else if ((userMove == 'rock' && aiMove == 'scissors') || (userMove == 'scissors' && aiMove == 'paper') || (userMove == 'paper' && aiMove == 'rock')){
    return ['win','lose']
  }
  else {
    return ['lose','win']
  }
}