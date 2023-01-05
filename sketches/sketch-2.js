let cabin;
let img;


function preload(){
    cabin = loadFont('/assets/Cabin-SemiBold.ttf');
    img = loadImage('/assets/tms/hm-flying.png')
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

    loop()
}

function draw() {
    orbitControl()

    // rotate
    // let time = millis();
    // rotateX(time / 900);
    // rotateZ(time / 1000);

    push()
    // stroke(100, 100, 240);
    noStroke()
    translate(0, 0);
    translate(p5.Vector.fromAngle(millis() / 1000, 150))
        texture(img)
        textureMode(IMAGE);
    plane(100,100);
    pop()

}

function mousePressed(){
    console.log(mouseY)
}



