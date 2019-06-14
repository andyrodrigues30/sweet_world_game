function restartValues() {
    obstacleSprite.position.x = myCanvas.x + (myCanvas.x / 2);
    donutSprite.position.x = 325;
    faceSprite.position.y = 20;
    faceSprite.position.x = myCanvas.x / 2;

//include an if statement to set the difficulty
    if (difficultyLevel.easy == true) {
        obstacleMovespeed = 5;
        choc.movespeed = 5;
        donutMovespeed = 8;
    }

    if (difficultyLevel.medium == true) {
        obstacleMovespeed = 7;
        choc.movespeed = 7;
        donutMovespeed = 10;
    }

    if (difficultyLevel.hard == true) {
        obstacleMovespeed = 10;
        choc.movespeed = 10;
        donutMovespeed = 13;
    }

    score = 0;
    treatCounter = 0;
    r = 68;
    g = 36;
    b = 17;

    chocr = 81;
    chocg = 42;
    chocb = 21;

    bg.r = 214;
    bg.g = 255;
    bg.b = 252;
    state = false;
    pauseGame = false;
  }