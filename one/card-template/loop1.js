//active image that we're using as a brush 
var activeBrush


//var brushArray = []
 

var brushes = []


function setup() {

    createCanvas(windowWidth, windowHeight);
    //activeBrush = loadImage("emoji/" + emojiFileNames[0])
    

    var counter = 90 
    
    while (counter < emojiFileNames.length) {
        
        var loadedImage = loadImage("emoji/" + emojiFileNames[counter])
        
        brushes.push(loadedImage)
        
        counter = counter + 10
    }
    
    
    
}


function draw() {
    
    background(255, 100, 100, 2)

    //background(255)
      


    
    imageMode(CENTER)
    //image(brushes[2], mouseX, mouseY
    
    
    var counter = 0
    
    while (counter < 100) {
        //text(counter, 10,10)
        
        if (counter % 10 == 0) {
                    stroke(random(200), 255, 255);
                fill(random(200), 200, 255)
        }
        
        
        quad((counter*2), mouseY, mouseY, mouseX, mouseX, mouseX, mouseX, mouseX);
        counter = counter + 1
    }
    

}

function mouseClicked() {
    index += 1
    
    if (index > 3) {
     index = 0   
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}








var emojiFileNames = ["1f600.png",
"1f601.png",
"1f602.png",
"1f603.png",
"1f604.png",
"1f605.png",
"1f606.png",
"1f607.png",
"1f608.png",
"1f609.png",
"1f60a.png",
"1f60b.png",
"1f60c.png",
"1f60d.png",
"1f60e.png",
"1f60f.png",
"1f610.png",
"1f611.png",
"1f612.png",
"1f613.png",
"1f614.png",
"1f615.png",
"1f616.png",
"1f617.png",
"1f618.png",
"1f619.png",
"1f61a.png",
"1f61b.png",
"1f61c.png",
"1f61d.png",
"1f61e.png",
"1f61f.png",
"1f620.png",
"1f621.png",
"1f622.png",
"1f623.png",
"1f624.png",
"1f625.png",
"1f626.png",
"1f627.png",
"1f628.png",
"1f629.png",
"1f62a.png",
"1f62b.png",
"1f62c.png",
"1f62d.png",
"1f62e.png",
"1f62f.png",
"1f630.png",
"1f631.png",
"1f632.png",
"1f633.png",
"1f634.png",
"1f635.png",
"1f636.png",
"1f637.png",
"1f638.png",
"1f639.png",
"1f63a.png",
"1f63b.png",
"1f63c.png",
"1f63d.png",
"1f63e.png",
"1f63f.png",
"1f640.png",
"1f645.png",
"1f646.png",
"1f647.png",
"1f648.png",
"1f649.png",
"1f64a.png",
"1f64b.png",
"1f64c.png",
"1f64d.png",
"1f64e.png",
"1f680.png",
"1f681.png"]