function howToPlay() {
    
    waffle();

    //TEXT
    textFont(myFont);
    noStroke();
    textSize(50);
    textAlign(CENTER, CENTER);
    fill(255);
    text('How to Play', 325, 100);

    textSize(25);
    text('Collect the treats and avoid the tomatoes', 325, 200);

    textFont(myFont);
    noStroke(255);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text('[M]ain Menu', 85, 475);

    //KEYS
    stroke(219);
    strokeWeight(5);
    fill(255);
    triangle(300, 300, 282.5, 270, 265, 300);//up
    triangle(300, 325, 300, 355, 265, 340);//right
    triangle(265, 380, 265, 410, 300, 395);//left

    //KEY LABEL
    stroke(255);
    strokeWeight(3);
    fill(170, 107, 0);
    textSize(20);
    text('Up Arrow - Jump', 425, 285);
    text('Right Arrow - Move Right', 465, 340);
    text('Left Arrow - Move Left', 450, 395);
    

    faceSprite.visible = false;
    obstacleSprite.visible = false;
    donutSprite.visible = false;
}