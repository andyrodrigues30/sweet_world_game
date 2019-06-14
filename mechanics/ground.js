let r = 68, g = 36, b = 17, state = false;
let chocr = 81, chocg = 42, chocb = 21;

function groundDraw() {
  
  noStroke();
  fill(r, g, b);
  rect(0, 325, ground.x, ground.y);

  fill(chocr, chocg, chocb);
  //chocolate square 1
  rect(choc.onex, choc.y, 125, 125);
  //chocolate square 2
  rect(choc.twox, choc.y, 125, 125);
  //chocolate square 3
  rect(choc.threex, choc.y, 125, 125);
  //chocolate square 4
  rect(choc.fourx, choc.y, 125, 125);
  //chocolate square 5
  rect(choc.fivex, choc.y, 125, 125);
  
  if (score % 300 === 0) {
    if (state) {
      r = 68;
      g = 36;
      b = 17;

      chocr = 81;
      chocg = 42;
      chocb = 21;

      bg.r = 214;
      bg.g = 255;
      bg.b = 252;
    } else {
      r = 239;
      g = 225;
      b = 152;

      chocr = 255;
      chocg = 240;
      chocb = 162;

      bg.r = 255;
      bg.g = 206;
      bg.b = 220;    
    }
  }
};

function groundMovement() {
  
  // MOVING SQUARES
  choc.onex = choc.onex - choc.movespeed;
  choc.twox = choc.twox - choc.movespeed;
  choc.threex = choc.threex - choc.movespeed;
  choc.fourx = choc.fourx - choc.movespeed;
  choc.fivex = choc.fivex - choc.movespeed;

  // REPEATING SQUARES.
  if ((choc.onex + 125) <= -100) choc.onex = 650;
  if ((choc.twox + 125) <= -100) choc.twox = 650;
  if ((choc.threex + 125) <= -100) choc.threex = 650;
  if ((choc.fourx + 125) <= -100) choc.fourx = 650;
  if ((choc.fivex + 125) <= -100) choc.fivex = 650;

}