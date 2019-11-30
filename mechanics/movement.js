function obstacleMovement() {
    obstacleSprite.position.x = obstacleSprite.position.x - obstacleMovespeed;
    //repeats obstacle
    if (obstacleSprite.position.x < -50) {
      obstacleSprite.position.x = 650;
    }
    if ((score % 100) == 0) {//as the score increases the speed of the obstacles gradually increase
      obstacleMovespeed += 0.5;//changed from divided by 100 to 100 so it speeds up at a faster rate
    }
    if (obstacleMovespeed == 14) {//when the obstacle speed gets to a certain speed the speed stops increasing
      obstacleMovespeed = 7;
    }
  }
  
  function donutMovement() {
    donutSprite.position.x = donutSprite.position.x - donutMovespeed;
    //repeat donut
    if (donutSprite.position.x < -50) {
      donutSprite.position.x = myCanvas.x + 50;
    } else if (faceSprite.collide(donutSprite)) {
      donutSprite.position.x = myCanvas.x + 50;
      pingSound.play();
      treatCounter = treatCounter + 1;
      score += 20;
    }
  }
  
  function playerMovement() {
    if (keyIsDown(39)) {//moving the player to the right
      if (faceSprite.position.x < 575) {
        faceSprite.position.x += 3;
      }
    }
  
    if (keyIsDown(37)) {//moving the player to the left
      if (faceSprite.position.x > 0) {
        faceSprite.position.x -= 3;
      }
    }
  
    if (!jumping && keyIsDown(38)) {//jumping
      faceSprite.velocity.y = -13;
      //disallow jumping while already jumping
      jumping = true;
    }
  }