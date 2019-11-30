function keyPressed() {
  if (endOfGame) {
///GAME OVER SCREEN
    if (keyCode === 80) {
      //80 p
      restartValues();
      faceSprite.visible = true;
      obstacleSprite.visible = true;
      donutSprite.visible = true;
      endOfGame = false;
      playGame = true;
    } else if (keyCode === 77) {
      //77 m
      restartValues();
      faceSprite.visible = true;
      obstacleSprite.visible = true;
      donutSprite.visible = true;
      endOfGame = false;
      playGame = false;
    }
///NOT GAME OVER SCREEN
  } else {
    if (keyCode === 80) {
      //80 p
      restartValues();
      faceSprite.visible = true;
      obstacleSprite.visible = true;
      donutSprite.visible = true;
      endOfGame = false;
      playGame = true;
    } else if (keyCode === 32 && !pauseGame && !endOfGame && !instructions && !difficulty) {
      noLoop();
      pauseGame = true;
    } else if (keyCode === 32 && pauseGame && !endOfGame && !instructions && !difficulty) {
      loop();
      pauseGame = false;
    } else if (keyCode === 72) {
      //72 h
      restartValues();
      faceSprite.visible = true;
      obstacleSprite.visible = true;
      donutSprite.visible = true;
      endOfGame = false;
      playGame = false;
      instructions = true;
    } else if (keyCode === 77) {
      //77 m
      restartValues();
      faceSprite.visible = true;
      obstacleSprite.visible = true;
      donutSprite.visible = true;
      endOfGame = false;
      playGame = false;
      instructions = false;
      difficulty = false;
    } else if (keyCode === 68) {
      //77 d
      restartValues();
      faceSprite.visible = true;
      obstacleSprite.visible = true;
      donutSprite.visible = true;
      endOfGame = false;
      playGame = false;
      instructions = false;
      difficulty = true;
    }
  }
}