function setup() {
    const frame = document.querySelector("#frame");
    let canvas = createCanvas(frame.offsetWidth, frame.offsetHeight);
    canvas.parent('frame');

    angleMode(RADIANS)
    frameRate(30)
    background(30);

    fillArray();
}

function windowResized(){
    points = []
    if(window.location !== window.parent.location){
        resizeCanvas(windowWidth, windowHeight)
    } else {
        resizeCanvas(frame.offsetWidth, frame.offsetHeight)
    }

    fillArray();
    background(30);

    loop()
}

function draw() {
    
    Rect(width/2, height/2, 40, 40)

    if(frameCount === 1){
        noLoop()
    }
}









