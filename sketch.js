function getFrameSize() {
    //checks if webpage is loaded with iframe
    const frame = document.querySelector("#frame");
    let frameWidth;
    let frameHeight;
    if(window.location !== window.parent.location){
        frameWidth = windowWidth
        frameHeight = windowHeight;
    }  else {
        frameWidth = frame.offsetWidth
        frameHeight = frame.offsetHeight
    }
    
    console.log([frameWidth, frameHeight])
    return [frameWidth, frameHeight]
}

function iframe(){
    const frameBox = document.querySelector(".main-frame-box");
    const frame = document.querySelector("#frame");
    const iframePlace = document.querySelector("#iframePlace")
    if(window.location !== window.parent.location){
        iframePlace.appendChild(frame)
        frameBox.remove()
    }  
}

function setup() {
    iframe();
    const x = getFrameSize()    

    let canvas = createCanvas(x[0], x[1]);
    canvas.parent('frame');
    angleMode(RADIANS)
    frameRate(30)
    background(30);
}
let r = 30;
function draw() {
    r++;
    if (r > 252){
        r = 30;
    }

    

    textSize(32);
    if(frameCount === 1){
        fill(252);
        text('XD', frame.offsetWidth/2, frame.offsetHeight/2);
        noLoop()
    }

    if(drawButton){      
        fill(r);  
        text('XD', mouseX, mouseY);
    }
}

function windowResized(){
    const x = getFrameSize()
    resizeCanvas(x[0], x[1])
    background(30);
}

let drawButton = false
function touchStarted(){
    loop()
    drawButton = true
}

function mouseReleased(){
    noLoop()
    drawButton = false
}




