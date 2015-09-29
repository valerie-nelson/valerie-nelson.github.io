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
  background (255,255,255,100)
}
mouseClicked = function() {
    ellipse(mouseX, mouseY, 10, 10);
};

function draw() {
   
    
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */
imageMode(CENTER)

   image(brush1, mouseY, mouseX, 80, 80)
    image(brush1, mouseX*2, mouseY*2, 80, 80) 
    image(brush1, mouseX+mouseY*1.5, mouseY+40*2, 80, 80)
    image(brush1, mouseY-mouseX, mouseY/2, 80, 80)
    image(brush1, mouseY-mouseX, mouseY-mouseX, 80, 80)
    image(brush1, mouseX, mouseY, 80, 80)
    image(brush1, mouseY*2, mouseX/2, 80, 80)
    image(brush1, mouseX-mouseY*1, mouseY, 80, 80)
    //image(brush1, mouseX/1.7, mouseY*1.2, 80, 80)
    

}









function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



