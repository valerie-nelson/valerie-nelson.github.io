var ellipseRadius = 5

//images

//active image that we're using as a brush 
var paintBrushImage

//bank of brushes
var brush1
var brush2


function setup() {

    createCanvas(windowWidth, windowHeight);

    //console.log("hello!?")
    //console.log(windowWidth)

    brush1 = loadImage("emoji.png")
    brush2 = loadImage("fish.png")


}

function draw() {

    background(255, 255, 255, 10)

    if (ellipseRadius < 150) {
        ellipseRadius += 1
    } else {
        ellipseRadius = 1
    }

    /*  
        Logical operators you can use 
        <, <=, >, >=, ==, &&, ||
    */

    if (mouseX > windowWidth / 2) {
        paintBrushImage = brush1
    } else {
        paintBrushImage = brush2
    }



    imageMode(CENTER)

    if (mouseIsPressed) {
        image(paintBrushImage, mouseX, mouseY, ellipseRadius, ellipseRadius)
    }

    //Brush selectors maybe?
    image(brush1, 100, windowHeight - 100, 50, 50)


    //some code from earlier examples:


    /*
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);

    ellipse(windowWidth/4, windowHeight/4, ellipseRadius, ellipseRadius);
    
    ellipse(windowWidth/3, windowHeight/3, ellipseRadius, ellipseRadius);
    
    */


    /*
    var firstExample = 15
    var secondExample = "cats are great"
    var thridExample = true
    */

    /* types:
    numbers, for example: 5
    strings, for example: "hello world"
    boolean, for example: false
    */


    /*
    ellipse(mouseX, mouseY, 50, 50);

    noStroke()
    ellipse(mouseX, mouseY - 25, 25, 25);
    ellipse(mouseX, mouseY + 25, 25, 25);

    stroke(255, 133, 200)
    line(mouseX, mouseY, 50, 50);

    */
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

