var brushSize = 5
var paintBrushImage
var brush1
var brush2

function setup() {

    createCanvas(windowWidth, windowHeight);
    noCursor();
    brush1 = loadImage("cur330.png")
    brush2 = loadImage("genealogy.png")
    brush3 = loadImage("banana.png")
    brush4 = loadImage("palm-branch.png")
    brush5 = loadImage("giphymario.gif")
 
}


function draw() {
    background (255,255,255,100)
    
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */


   image(brush1, mouseY, mouseX, 40, 40)
        
    imageMode(CENTER)

}









function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



