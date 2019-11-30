function buttonPlayHover(){
    if ((mouseX > 225 && mouseX < 225 + 210 && mouseY > 260 && mouseY < 260 + 60) && !endOfGame && !playGame && !difficulty) {
        fill(239, 239, 239);
    } else {
        fill(219, 219, 219);
    }
}

function buttonDifficultyHover(){
    if ((mouseX > 225 && mouseX < 225 + 210 && mouseY > 335 && mouseY < 335 + 60) && !endOfGame && !playGame && !difficulty) {
        fill(239, 239, 239);
    } else {
        fill(219, 219, 219);
    }
}

function buttonHowTwoPlayHover(){
    if ((mouseX > 225 && mouseX < 225 + 210 && mouseY > 410 && mouseY < 410 + 60) && !endOfGame && !playGame && !difficulty) {
        fill(239, 239, 239);
    } else {
        fill(219, 219, 219);
    }
}

function difficultyEasyHover(){
    if ((mouseX > 70 && mouseX < 70 + 160 && mouseY > 210 && mouseY < 210 + 60) && !endOfGame && !playGame && difficulty) {
        fill(239, 239, 239);
    } else {
        fill(219, 219, 219);
    }
}

function difficultyMediumHover(){
    if ((mouseX > 70 && mouseX < 70 + 160 && mouseY > 285 && mouseY < 285 + 60) && !endOfGame && !playGame && difficulty) {
        fill(239, 239, 239);
    } else {
        fill(219, 219, 219);
    }
}

function difficultyHardHover(){
    if ((mouseX > 70 && mouseX < 70 + 160 && mouseY > 360 && mouseY < 360 + 60) && !endOfGame && !playGame && difficulty) {
        fill(239, 239, 239);
    } else {
        fill(219, 219, 219);
    }
}


// When the user clicks the mouse
function mousePressed() {
    //main menu buttons
    if ((mouseX > 225 && mouseX < 225 + 210 && mouseY > 260 && mouseY < 260 + 60) && !endOfGame && !playGame && !difficulty && !instructions) {
        //play
        restartValues();
        faceSprite.visible = true;
        obstacleSprite.visible = true;
        donutSprite.visible = true;
        endOfGame = false;
        playGame = true;
    }
    if ((mouseX > 225 && mouseX < 225 + 210 && mouseY > 335 && mouseY < 335 + 60) && !endOfGame && !playGame && !difficulty && !instructions) {
        //difficulty
        restartValues();
        faceSprite.visible = true;
        obstacleSprite.visible = true;
        donutSprite.visible = true;
        endOfGame = false;
        playGame = false;
        instructions = false;
        difficulty = true;
    }
    if ((mouseX > 225 && mouseX < 225 + 210 && mouseY > 410 && mouseY < 410 + 60) && !endOfGame && !playGame && !difficulty && !instructions) {
        //instructions
        restartValues();
        faceSprite.visible = true;
        obstacleSprite.visible = true;
        donutSprite.visible = true;
        endOfGame = false;
        playGame = false;
        difficulty = false;
        instructions = true;
    }

    //endo of game play button
    if ((mouseX > 290 && mouseX < 290 + 60 && mouseY > 360 && mouseY < 410) && endOfGame) {
        restartValues();
        faceSprite.visible = true;
        obstacleSprite.visible = true;
        donutSprite.visible = true;
        endOfGame = false;
        playGame = true;
    }

    //difficulty screen
    if ((mouseX > 75 && mouseX < 75 + 160 && mouseY > 210 && mouseY < 210 + 60) && !endOfGame && !playGame && difficulty && !instructions) {
        buttonSelectedColour.easy = 210;
        buttonSelectedColour.medium = 255;
        buttonSelectedColour.hard = 255;

        difficultyLevel.easy = true;
        difficultyLevel.medium = false;
        difficultyLevel.hard = false;
        currentDifficulty = "Easy";

        obstacleMovespeed = 3;

    } else if ((mouseX > 75 && mouseX < 75 + 160 && mouseY > 285 && mouseY < 285 + 60) && !endOfGame && !playGame && difficulty && !instructions) {
        buttonSelectedColour.easy = 255;
        buttonSelectedColour.medium = 210;0
        buttonSelectedColour.hard = 255;

        difficultyLevel.easy = false;
        difficultyLevel.medium = true;
        difficultyLevel.hard = false;
        currentDifficulty = "Medium";

        obstacleMovespeed = 7;

    } else if ((mouseX > 75 && mouseX < 75 + 160 && mouseY > 360 && mouseY < 360 + 60) && !endOfGame && !playGame && difficulty && !instructions) {
        buttonSelectedColour.easy = 255;
        buttonSelectedColour.medium = 255;
        buttonSelectedColour.hard = 210;

        difficultyLevel.easy = false;
        difficultyLevel.medium = false;
        difficultyLevel.hard = true;
        currentDifficulty = "Hard";

        obstacleMovespeed = 10;
    }

/*
    MOBILE
*/

//Mobile Jumping Button
    if (!jumping && ((mouseX >= 515 && mouseX <= 550 && mouseY >= 330 && mouseY <= 365) && playGame && !endOfGame && !difficulty && !instructions)) {
        faceSprite.velocity.y = -13;
        //disallow jumping while already jumping
        jumping = true;
    }
//Mobile Jumping Button
    if (!jumping && ((mouseX >= 455 && mouseX <= 490 && mouseY >= 405 && mouseY <= 435) && playGame && !endOfGame && !difficulty && !instructions)) {
        if (faceSprite.position.x < 575) {
            faceSprite.position.x += 3;
        }
    }
//Mobile Jumping Button
    if (!jumping && ((mouseX >= 575 && mouseX <= 610 && mouseY >= 405 && mouseY <= 425) && playGame && !endOfGame && !difficulty && !instructions)) {
        if (faceSprite.position.x > 0) {
            faceSprite.position.x -= 3;
        }
    }
}