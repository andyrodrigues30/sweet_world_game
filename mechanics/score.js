function faceScore() {
  textFont(myFont);
  textSize(20);
  fill(0, 0, 0);
  text(Math.trunc(score), 75, 50);
  score += 0.5;
  groundDraw.switchCounter += 0.5
}

function treatsCollected() {
  textFont(myFont);
  textSize(20);
  fill(0, 0, 0);
  text(treatCounter, 600, 50);
}

function highScore() {
  textFont(myFont);
  if (userHighScore < score) {
    userHighScore = score;
    highScoreMessage = 'You beat the highest score!';
  } else {
    highScoreMessage = '';
  }
  textSize(20);
  fill(0, 0, 0);
  text(Math.trunc(userHighScore), 340, 50);
}