var brushSize = 50
var paintBrushImage
var brush1
var brush2
var brush3


function setup() {

    createCanvas(windowWidth, windowHeight);
    bg = loadImage("Contemporary-front-yard-desert-landscaping-ideas-walkway-on-a-budget.jpg");
    
    brush1 = loadImage("star4.png")
    brush2 = loadImage("cactus.png")
    brush3 = loadImage("blue_hydrangea.png")
    brush4 = loadImage("palm-branch.png")
    brush5 = loadImage("giphymario.gif")
    
}


function draw() {
    
   
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */
   
    
    if (mouseY > 400) {
        paintBrushImage = brush2
       
    } 
    
    if (mouseY < 400) {
        paintBrushImage = 0
    }
    



        



    
    

}

    function mouseClicked() {
    image(paintBrushImage, mouseX, mouseY, 150, 150);
    
      imageMode(CENTER)  
    
    }








function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



