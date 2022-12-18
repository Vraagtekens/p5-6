let angle = 0;
let angleV = 0.05;
let angleA = 0;
let allInstances = []
let onOff = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS)
    frameRate(30)

    background(40);
    fillAllInstances(230, windowWidth / 12 + extraMargin());
}
function draw() {
    allInstances.forEach(element => {
        element.draw()        
    });

    angle += angleV
    angleV += angleA

    m++;

    if(frameCount === 1){
        noLoop();
    }
}

function windowResized(){
    allInstances = [];
    resizeCanvas(windowWidth, windowHeight)
    background(40);
    fillAllInstances(230, windowWidth / 12 + extraMargin());
}

function fillAllInstances(color, margin){        
    for (let x = 0; x < width + margin; x += margin) {
        for (let y = 0; y < height + margin; y += margin) {
            if(true){
                allInstances.push(new BasicShape(x, y, color))
            } 
        }
      }
}   

let m = 0;
let lastM = m;
function mousePressed(){
    loop();

    //lastX + 10 is for the mobile users they quick two times accidentally
    if(lastM + 10 < m){
        if(onOff === true){
            allInstances = [];
            background(230);
            angleV = 0.1
            fillAllInstances(30, (windowWidth / 16) + extraMargin());
            onOff = false
        } else {
            allInstances = [];
            background(40);
            angleV = 0.05
            fillAllInstances(230, windowWidth / 12 + extraMargin());
            onOff = true
        }
    }
    lastM = m
}

function extraMargin(){
    let margin = 0;
    if(windowWidth > 400){
        margin -= 5
    } 
    if(windowWidth > 700){
        margin -= 20
    } 
    if(windowWidth > 1000){
        margin -= 40
    }
    return margin;
}


