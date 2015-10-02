var toadImage;

function setup() {
    createCanvas(windowWidth, windowHeight); 
    toadImage = loadImage("toad.png");
}


function draw() { 
   background(255,10);
}


function toadMachine(x,y, numberOfToads) {
 
    var counter = 0;
    
    while (counter < numberOfToads) {
        image(toadImage, random(x-100, x+100), random(y-100,y+100), 50, 50);
        
        counter++;
    }
    
    
}


function mouseClicked() {
    background(255,15);
    
    toadMachine(mouseX, mouseY, 30);

}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}






