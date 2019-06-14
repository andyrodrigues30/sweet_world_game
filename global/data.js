let myCanvas = {
  x: 650,
  y: 500
};

let myFont;

let bg = {
  r: 214,
  g: 255,
  b: 252
};

let buttonSelectedColour = {
  easy: 255,
  medium: 210,
  hard: 255
};
  
let ground = {
  x: myCanvas.x,
  y: myCanvas.y - 325,
};

let pauseGame = false;

let difficulty = false;
let difficultyType = "";
let difficultyLevel = {
  easy: false,
  medium: true,
  hard: false
};
  
let choc = {
  onex: 25,
  y: 350,
  twox: 200,
  threex: 375,
  fourx: 550,
  fivex: 725,
  movespeed: 7
};

let hit = false;

let chooseDifficulty = {
  easy: false,
  medium: true,
  hard: false
};

let currentDifficulty = "Medium";
  
let obstaceEmoji,
    obstacleMovespeed = 7,

    faceEmoji,
    score = 0,  
    userHighScore = 0,
    highScoreMessage,

    jumping = false,
    donutEmoji,
    donutMovespeed = 1,
    treatCounter = 0,

    endOfGame = false,
    playGame = false,
    instructions = false,
    
    story = `Keep running collecting all the treats you find along the way. If you touch a tomato, you loose. Keep running to get the highest score.`,
    keys = `\nLEFT arrow key ⟸ to move left\nRIGHT arrow keys ⟹ to move right\nUP arrow ⇑ to jump...\n\nGood Luck!`;