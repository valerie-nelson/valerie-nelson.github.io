var brushSize = 5
var paintBrushImage
var brush1
var brush2

function setup() {

    createCanvas(windowWidth, windowHeight);
    
    brush1 = loadImage("small-palm-tree.png")
    brush2 = loadImage("genealogy.png")
    brush3 = loadImage("banana.png")
    brush4 = loadImage("palm-branch.png")
    brush5 = loadImage("giphymario.gif")
 
}


function draw() {
    //background (30,245,0,1)
    
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */


      if (mouseX > windowWidth / 3) {
        paintBrushImage = brush1
    } if (mouseX < 400) {
        paintBrushImage = brush2
    } if (mouseY >= windowHeight / 3){
        paintBrushImage = brush3
    } if (mouseY > windowHeight / 2){
        paintBrushImage = brush4
    } if (mouseX < 600 & mouseX > 500 & mouseY > 120 &         mouseY < 200) {
        paintBrushImage = brush5
    }
        


    if (mouseIsPressed & brushSize < 250) {
        image(paintBrushImage, mouseX, mouseY, brushSize, brushSize)
        brushSize += 1
    } else {
        brushSize = 50
    }
    
    
    imageMode(CENTER)

}









function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



