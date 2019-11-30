function gameOver() {
    background(255, 117, 149);
  
    faceSprite.visible = false;
    obstacleSprite.visible = false;
    donutSprite.visible = false;
  
    //blue sprinkle
    stroke(78, 181, 237);
    strokeWeight(10);
    line(20, 20, 35, 50);
    line(425, 250, 400, 275);
    line(650, 470, 625, 500);
  
    //red sprinkle
    stroke(255, 29, 0);
    strokeWeight(10);
    line(50, 425, 90, 475);
    line(400, 50, 430, 80);
    line(470, 375, 430, 400);
  
    //green sprinkle
    stroke(8, 219, 15);
    strokeWeight(10);
    line(50, 200, 75, 225);
    line(530, 310, 560, 340)
  
    //yellow sprinkle
    stroke(242, 255, 0);
    strokeWeight(10);
    line(600, 50, 570, 75);
    line(280, 450, 310, 490);
  
    //white sprinkle
    stroke(255, 255, 255);
    strokeWeight(10);
    line(575, 200, 550, 230);
    line(200, 100, 230, 75);
    line(100, 350, 110, 310);
  
    textFont(myFont);

    noStroke();
    textSize(50);
    textAlign(CENTER);
    fill(255, 255, 255);
    text('GAME OVER!', 325, 175);
  
    fill(133, 39, 173);
    textSize(17);
    text('You got ' + treatCounter + ' treats so you got ' + (treatCounter * 20) + ' points added to your final score!', 325, 225)
  
    //display final score
    fill(255, 255, 255);
    textSize(25);
    text('Score: ' + Math.trunc(score), 325, 290);

    //if user beat high score display message
    fill(133, 39, 173);
    textSize(17);
    text(highScoreMessage, 325, 315);

    textSize(20);
    fill(255);
    text('[M]ain Menu', 75, 475);
    text('[P]lay', 575, 475);
  
    //play button
    if (mouseX > 290 && mouseX < 290 + 60 && mouseY > 360 && mouseY < 410) {
      fill(239, 239, 239);
    } else {
      fill(219, 219, 219);
    }
    //outer
    triangle(290, 360, 290, 410, 350, 385);
  
    fill(255, 255, 255);//inner
    triangle(295, 370, 295, 400, 335, 385);
  }