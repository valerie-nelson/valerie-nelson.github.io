var brushSize = 5
var paintBrushImage
var brush1
var brush2

function setup() {

    createCanvas(windowWidth, windowHeight);
    background (3,2,20);
    brush1 = loadImage("star4.png")
    brush2 = loadImage("star3.png")
    brush3 = loadImage("star5.png")
    
 
}


function draw() {
    //background (30,245,0)
    if (paintBrushImage < 25) {
        paintBrushImage += 1
    } else {
        paintBrushImage = 1
    }
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */
   if (mouseX > 300 & mouseX < 350 & mouseY > 200 & mouseY < 300) {
        paintBrushImage = brush1;
        
    }
    if (mouseX > 500 & mouseX < 600 & mouseY > 100 & mouseY < 350) {
        paintBrushImage = brush1;
        cursor(HAND);
    }
    
    if (mouseX > 100 & mouseX < 400 & mouseY > 200 & mouseY < 300 & mouseY >250) {
        paintBrushImage = brush3;
        cursor(pointer);
    }
    
    else {
        paintBrushImage = brush2
    }

}
        


    function mouseClicked() {
    image(paintBrushImage, mouseX, mouseY);
    imageMode(CENTER);
        
    
    }
    
    











function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



