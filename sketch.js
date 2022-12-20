function setup() {
    const frame = document.querySelector("#frame");
    let frameWidth = frame.offsetWidth;   
    let frameHeight = frame.offsetHeight;   

    let canvas = createCanvas(frameWidth, frameHeight);
    canvas.parent('frame');
    angleMode(RADIANS)
    frameRate(30)
    background(30);

}
function draw() {

    if(drawButton){
        fill(252);
        textSize(32);
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




