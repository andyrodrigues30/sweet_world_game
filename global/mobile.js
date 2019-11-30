function mobileControl() {
    if (window.innerWidth <= 700) {
        console.log("Hello World");

        stroke(219);
        strokeWeight(5);
        fill(255);
        //ARROW
        triangle(550, 365, 532.5, 330, 515, 365);//up
        triangle(490, 405, 490, 435, 455, 420);//right
        triangle(575, 405, 575, 435, 610, 420);//left
    }
}