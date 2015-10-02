function setup() {
    createCanvas(windowWidth, windowHeight);
    background(170, 230, 255)
}

function draw() {

    //just showing you a sketch will be a resizable card
    //delete all this and replace it with your own sketch
    var counter = 0
    //one way of handling multiple input types
    if (touchIsDown || mouseIsPressed) {
        stroke(255, random(100), random(255));
        fill(random(200), 200, 255);
        quad(getInputX(), getInputY(), getInputX(), getInputY(), random(windowWidth), windowHeight/2, getInputX(), windowHeight);
        counter = counter + 1;
    }
    
     

    //background(255)
      


    
    imageMode(CENTER)
    //image(brushes[2], mouseX, mouseY
    
    
    
    
    
    
 

}







function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



//One way of handling multiple inputs: 
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));



function getInputX() {
    var xValue;
    if (isTouch) {
        xValue = touchX;   
    } else {
        xValue = mouseX;
    }

    return xValue;
}


function getInputY() {
    var yValue;
    if (isTouch) {
        yValue = touchY;   
    } else {
        yValue = mouseY;
    }

    return yValue;
}
        
