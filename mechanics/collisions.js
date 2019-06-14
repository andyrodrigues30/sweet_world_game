// handles ground-player collision + sides.
const collisionGroundSides = () => {
    
  faceSprite.position.y += faceSprite.velocity.y;

    if (faceSprite.position.y > 300) {
      faceSprite.position.y = 300;
      faceSprite.velocity.y = 0;
      jumping = false;
    } else faceSprite.velocity.y++;

    if (faceSprite.position.x <= 25) faceSprite.position.x = 25;
    if (faceSprite.position.x >= myCanvas.x) faceSprite.position.x = myCanvas.x - 25;

};