let cabin;
function preload(){
    cabin = loadFont('assets/Cabin-SemiBold.ttf');
}

function setup() {
    const frame = document.querySelector("#frame");
    let canvas = createCanvas(frame.offsetWidth, frame.offsetHeight, WEBGL);
    canvas.parent('frame');

    angleMode(RADIANS)
    frameRate(30)
    
    textFont(cabin);
    textSize(width / 3);
    textAlign(CENTER, CENTER);
}

function windowResized(){
    points = []
    if(window.location !== window.parent.location){
        resizeCanvas(windowWidth, windowHeight)
    } else {
        resizeCanvas(frame.offsetWidth, frame.offsetHeight)
    }

    background(30);

    loop()
}

function draw() {
    background(30)

    push()
    // let time = millis();
    // rotateX(time / 900);
    // rotateZ(time / 1000);

    text('p5-6', x, y);


    pop()

    moveText();
}

function mousePressed(){
    console.log(width/4)
}

let x = 0;
let y = 0;
function moveText(){
    if(x < width/4){
        x++;
    }

    if(y <  height/4){
        y--
    }
}









