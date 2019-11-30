function mainMenu() {
    background(bgcookie);

    //TITLE TEXT
    textFont(myFont);
    stroke(61, 29, 1);
    textSize(50);
    fill(61, 29, 1);
    textAlign(CENTER);
    text('Sweet World', 325, 175);

    //BUTTONS
    noStroke();
    buttonPlayHover();
    rect(225, 260, 210, 60);
    buttonDifficultyHover();
    rect(225, 335, 210, 60);
    buttonHowTwoPlayHover();
    rect(225, 410, 210, 60);

    noStroke();
    fill(255);
    rect(230, 265, 200, 50);
    rect(230, 340, 200, 50);
    rect(230, 415, 200, 50);

    //BUTTONS TEXT
    textSize(30);
    fill(61, 29, 1);
    text('[P]lay', 325, 300);

    text('[D]ifficulty', 325, 375);

    text('[H]ow to play', 325, 450);

    faceSprite.visible = false;
    obstacleSprite.visible = false;
    donutSprite.visible = false;
}