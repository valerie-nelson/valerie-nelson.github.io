
var brush1


function setup() {

    createCanvas(windowWidth, windowHeight);
    noCursor();
    brush1 = loadImage("cur330.png");
   
 
}


function draw() {
    background (255,255,255,100)
    noStroke();
    fill(10,70,255)
    rect(550,500,5,5);
    
    
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */

    //imageMode(CENTER)
    //the real one
    image(brush1, mouseY, mouseX, 40, 40);
    
    
    image(brush1, mouseY-mouseX+100, mouseX+100, 40, 40);
    image(brush1, mouseY+mouseX-200, mouseX-300*0.5, 40, 40);
    image(brush1, mouseX-mouseY+400, mouseY+100, 40, 40);
    image(brush1, mouseX+100*0.9, mouseY-mouseX+200, 40, 40);
    image(brush1, mouseY+100, mouseX+200, 40, 40);
    image(brush1, mouseX*0.9, mouseY+200*2/3, 40, 40);
   
    image(brush1, mouseY-100*0.5, mouseX-mouseY-100, 40, 40)
    image(brush1, mouseY+300, mouseX-100*0.8, 40, 40)
    image(brush1, mouseY-100*0.2, mouseX*0.9-300, 40, 40)
    image(brush1, mouseY-mouseX+300, mouseY, 40, 40)
    image(brush1, mouseY+200, mouseX*0.4, 40, 40);
    image(brush1, mouseY*0.5, mouseX*0.5, 40, 40)
    image(brush1, mouseY*0.9+500, mouseX*0.9+50, 40, 40)
    

    
    
}



function mousePressed() {
    
//image1
    if (mouseX > 482 && mouseX < 495 && mouseY > 532 && mouseY < 545) {
       
   alert("yes!")
    }
}
    

    
    
    
 //image2   
 //if (mouseX+20 > 500 && mouseX+20 < 530 && mouseY-100 > 300 && mouseY-100 < 330) {
       
  //     alert("ay!")
       //show "1" point, move the box, and switch cursor
 //  }




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



