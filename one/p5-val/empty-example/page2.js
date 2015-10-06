
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
    rect(500,150,20,20);
    
    
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */

    //imageMode(CENTER)
    image(brush1, mouseY, mouseX, 40, 40);
   //image(brush1, mouseY-100, mouseX+20, 1, 1)
    

    
    
}



function mousePressed() {
    
//image1
    if (mouseX > 135 && mouseX < 160 && mouseY > 485 && mouseY < 505) {
       
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



