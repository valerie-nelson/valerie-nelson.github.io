function setup() {
    createCanvas(windowWidth, windowHeight);
    background(170, 230, 255)
}

function draw() {

    var counter = 0
    
    
    
    //one way of handling multiple input types
    if (touchIsDown || mouseIsPressed) {
        strokeWeight(2);
        stroke(255);
        fill(random(getInputX()), 255, random(getInputX()));
        quad(counter*20, getInputY(), getInputY(), getInputX(), getInputY(), getInputX(), windowWidth, getInputX());
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
        
