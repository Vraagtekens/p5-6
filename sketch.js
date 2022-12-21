function inIframe() {
    //checks if webpage is loaded with iframe
    const frameBox = document.querySelector(".frame-box");
    if(window.location !== window.parent.location){
        frameBox.classList.remove("frame-box")
    }  
}

function setup() {
    const frame = document.querySelector("#frame");
    let frameWidth = frame.offsetWidth;   
    let frameHeight = frame.offsetHeight;   
    inIframe()

    let canvas = createCanvas(frameWidth, frameHeight);
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
    frameWidth = frame.offsetWidth;;
    frameHeight = frame.offsetHeight; 
    resizeCanvas(frameWidth, frameHeight)
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




