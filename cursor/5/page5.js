
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
    rect(350,250,5,5);
    
    
  
    /*  
        <, <=, >, >=, ==, &&, ||
    */

    //imageMode(CENTER)
    image(brush1, mouseY, mouseX, 40, 40);
    image(brush1, mouseY-mouseX+100, mouseX+100, 40, 40);
   //image(brush1, mouseY-100, mouseX+20, 1, 1)
    

    
    
}



function mousePressed() {
    
//image1
    if (mouseX > 232 && mouseX < 245 && mouseY > 332 && mouseY < 345) {
       background (255,100,255,100)
       window.location.href = "http://valerie-nelson.github.io/cursor/6";
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



