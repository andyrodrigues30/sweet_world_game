function difficultyScreen() {
    background(bgmintchoc);
    textFont(myFont);
    stroke(0);
    textSize(50);
    textAlign(CENTER, CENTER);
    fill(255);
    text('Difficulty', 325, 100);
    //BUTTONS
    noStroke();
    
    //Outer
    difficultyEasyHover();
    rect(70, 210, 160, 60);
    difficultyMediumHover();
    rect(70, 285, 160, 60);
    difficultyHardHover();
    rect(70, 360, 160, 60);

    //Inner
    fill(buttonSelectedColour.easy);
    rect(75, 215, 150, 50);
    fill(buttonSelectedColour.medium);
    rect(75, 290, 150, 50);
    fill(buttonSelectedColour.hard);
    rect(75, 365, 150, 50);

    //BUTTONS TEXT
    textSize(30);
    fill(61, 29, 1);
    text('Easy', 150, 230);

    text('Medium', 150, 305);

    text('Hard', 150, 380);

    //current difficulty container
    stroke(245);
    strokeWeight(5);
    fill(255);
    rect(325, 232.5, 225, 150);

    noStroke();
    textSize(25);
    fill(61, 29, 1);
    text('Current Difficulty:', 435, 275);
    text(currentDifficulty, 435, 325);


    //main menu button
    textFont(myFont);
    stroke(0);
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text('Main Menu', 75, 475);

    faceSprite.visible = false;
    obstacleSprite.visible = false;
    donutSprite.visible = false;
}


/*
Easy 5
Medium 7
Hard 10
*/