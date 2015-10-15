
var brush1







function setup() {

    createCanvas(windowWidth, windowHeight);
    noCursor();
    brush1 = loadImage("/cur330.png");
   
 
}












function draw() {
    background (255,255,255,100)
    noStroke();
    fill(10,70,255)
    textSize(18);
    text("enter", 200, 330);
    //rect(300,500,40,40);
    
    
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */

    //imageMode(CENTER)
    image(brush1, mouseX, mouseY, 40, 40);
   //image(brush1, mouseY-100, mouseX+20, 1, 1)
    

    
    
}



function mousePressed() {
    
//image1
    if (mouseX > 185 && mouseX < 227 && mouseY > 285 && mouseY < 327) {
       background (255,100,255,100)
       window.location.href = "http://www.valerie-nelson.com/cursor/1";
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



