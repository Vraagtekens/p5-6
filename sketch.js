let angle = 0;
let angleV = 0.05;
let angleA = 0;
let allInstances = []
let onOff = true;

function setup() {
    createCanvas(400, 400);
    angleMode(RADIANS)
    frameRate(30)
    background(40);
    fillAllInstances(252, 40);
}
function draw() {
    allInstances.forEach(element => {
        element.draw()        
    });


    angle += angleV
    angleV += angleA
}

function fillAllInstances(color, margin){        
    for (let x = 0; x < width + margin; x += margin) {
        for (let y = 0; y < height + margin; y += margin) {
            if(!(x === width || y === width || x === 0 || y === 0)){
                allInstances.push(new BasicShape(x, y, color))
            } 
        }
      }
}   

function mousePressed(){
    if(onOff === true){
        background(230);
        angleV = 0.1
        fillAllInstances(30, 20);
        onOff = false
    } else {
        allInstances = [];
        background(40);
        angleV = 0.05
        fillAllInstances(230, 40);
        onOff = true
    }
}


