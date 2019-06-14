//loading emoji images
function preload() {
  obstacleEmoji = loadImage("../assets/emojis/obstacles/tomato-emoji.png");
  faceEmoji = loadImage("../assets/emojis/player/face-savouring-food-emoji.png");
  donutEmoji = loadImage("../assets/emojis/treats/doughnut-emoji.png");
  treatScoreImg = loadImage("../assets/emojis/treats/doughnut-emoji.png");
  scoreImg = loadImage("../assets/emojis/player/face-savouring-food-emoji.png");
  highScoreImg = loadImage("../assets/emojis/trophy_emoji.png")
  bgcookie = loadImage("../assets/backgrounds/cookie_background.jpg");
  bglollie = loadImage("../assets/backgrounds/lollie_background.jpg");
  bgmintchoc = loadImage("../assets/backgrounds/mint_chocolate_chip_background.jpg");
  crashSound = loadSound("../assets/sounds/crash_sound.flac");
  pingSound = loadSound("../assets/sounds/ping_sound.wav");
  myFont = loadFont("../assets/font/Pacifico-Regular.ttf");
}

function setup() {
  createCanvas(myCanvas.x, myCanvas.y);
  background(bg.r, bg.g, bg.b);
  //(255, 216, 225)

  faceSprite = createSprite(300, 0);
  faceSprite.addImage(faceEmoji);
  faceSprite.setCollider("circle", 0, 0, 35);

  obstacleSprite = createSprite(300, 300);
  obstacleSprite.addImage(obstacleEmoji);
  obstacleSprite.setCollider("circle", 0, 0, 35);
  obstacleSprite.position.x = myCanvas.x + (myCanvas.x / 2);

  donutSprite = createSprite(300, 300);
  donutSprite.addImage(donutEmoji);
  donutSprite.setCollider("circle", 0, 0, 35);
  donutSprite.position.x = myCanvas.x;

  treatScoreSprite = createSprite(575, 40);
  treatScoreSprite.addImage(treatScoreImg);
  treatScoreSprite.scale = 0.5;

  highScoreSprite = createSprite(325, 40);
  highScoreSprite.addImage(highScoreImg);
  highScoreSprite.scale = 0.5;

  scoreSprite = createSprite(50, 40);
  scoreSprite.addImage(scoreImg);
  scoreSprite.scale = 0.5;
}

function draw() {
  if (!endOfGame) {
    if (playGame) {
      background(bg.r, bg.g, bg.b);
      
      treatsCollected();
      faceScore();
      highScore();
      groundDraw();
      groundMovement();
      playScreenText();
      obstacleMovement();
      donutMovement();
      playerMovement();
      collisionGroundSides()
      drawSprites();
      mobileControl();
      faceSprite.collide(obstacleSprite, function () {
        crashSound.play();
        endOfGame = true;
      });
    } else if (instructions) {
      howToPlay();
    } else if (difficulty) {
      difficultyScreen();
    } else mainMenu();
  } else gameOver();
}