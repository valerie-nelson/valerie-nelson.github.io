var darkCloudImage;
var lightCloudImage;
var grassImage;

function setup() {
    createCanvas(windowWidth, windowHeight); 
    darkCloudImage = loadImage("cloud1.png");
    lightCloudImage = loadImage("cloud3.png");
    grassImage = loadImage("grass.png");
}


function draw() { 
   background(180,100,255,2);
    
    if (mouseY > 500) {
        image(grassImage, mouseX, mouseY, 100, 100);
    }
    
}


function cloudMachine(x,y, numberOfClouds) {
 
    var counter = 0;
    
    while (counter < numberOfClouds) {
        image(lightCloudImage, random(1000), random(y-100), 150, 100);
        image(darkCloudImage, random(1000), random(y-100), 150, 100);
        
        counter++;
    }
    
    
}


function mouseClicked() {
    
    
    cloudMachine(mouseX, mouseY, 4);

}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}






