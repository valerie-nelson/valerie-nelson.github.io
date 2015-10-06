var brushSize = 5
var paintBrushImage
var brush1
var brush2
var x
var y


   var CCOUNT = 10;
    
    var t, count;
    











function setup() {


    createCanvas(windowWidth, windowHeight);
    noCursor();
    brush1 = loadImage("cur330.png")
    x = width / 2;
    y = height;
  
}
/*mouseClicked = function() {
    ellipse(mouseX, mouseY, 10, 10);
}*/


    function cddisplay() {
        // displays time in span
        document.getElementById('timespan').innerHTML = count;
    };
    
    function countdown() {                                      
        // starts countdown
        cddisplay();
        if (count == 0) {
            // time is up
        } else {
            count--;
            t = setTimeout("countdown()", 1000);
        }
    };
    
    function cdpause() {
        // pauses countdown
        clearTimeout(t);
       
    };
    
    function cdreset() {
        // resets countdown
        cdpause();
        count = CCOUNT;
         cddisplay();
        if (count == 0) {
            // time is up
        } else {
            count--;
            t = setTimeout("countdown()", 1000);
        }
        
        if (count < 1) {
            document.getElementById('res').style.visibility='visible';
        }
    };
















function draw() {
   background (255,255,255,50)
   
   //    image(brush1, x, y, 80, 80);
   // image(brush1, y, x, 80, 80);
  // Jiggling randomly on the horizontal axis
  x = x + random(-10, 2);
  // Moving up at a constant speed
  y = y - 10;
    if (y < 0) {
    y = height;
    }
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */
   
imageMode(CENTER)

    image(brush1, mouseY, mouseX, 80, 80)
    image(brush1, mouseY-400, mouseX-400, 80, 80)
    image(brush1, mouseY+300, mouseX-100*0.8, 80, 80)
    image(brush1, mouseY-300, mouseX*0.9-300, 80, 80)
    image(brush1, mouseX-mouseY+300, mouseY, 80, 80)
    image(brush1, mouseX, mouseY-mouseX+500, 80, 80)
    image(brush1, mouseX*2, mouseY*2, 80, 80) 
    image(brush1, -mouseY, -mouseX, 80, 80)
    //the real one
    image(brush1, mouseX, mouseY, 80, 80)
    
    image(brush1, mouseX*2/5, mouseY*2/3, 80, 80)
    image(brush1, mouseX*5/3, mouseY*4/3+mouseX, 80, 80)
    image(brush1, mouseX+mouseY/2, mouseY+mouseX/2, 80, 80)
    image(brush1, mouseX*0.5+100, mouseY*0.5+20, 80, 80)
    image(brush1, mouseY*0.5, mouseX*0.5, 80, 80)
    image(brush1, mouseY*0.9+500, mouseX*0.9+500, 80, 80)
    image(brush1, mouseY+200, mouseX+200, 80, 80)
    image(brush1, mouseX*0.3+300, mouseY*0.8+600, 80, 80)
    image(brush1, mouseX*0.2+800, mouseY*0.5+600, 80, 80)
    image(brush1, mouseX-mouseY+400, mouseY, 80, 80)
    image(brush1, mouseY/2, mouseX/2, 80, 80)
    image(brush1, mouseX-mouseY+600, mouseY+20, 80, 80)
    image(brush1, mouseX/0.8, mouseY-100/0.7, 80, 80)
    image(brush1, mouseX+300*0.6, mouseY-mouseX+500, 80, 80)
    image(brush1, mouseX-300*0.4, mouseY+400, 80, 80)
    image(brush1, mouseX-600*0.9, mouseY+500, 80, 80)
    //image(brush1, mouseX/1.7, mouseY*1.2, 80, 80)
    
  
    

}









function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

