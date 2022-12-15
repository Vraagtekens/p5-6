let angle = 0;
let angleV = 0.05;
let angleA = 0;
let allInstances = []
let onOff = true;

function setup() {
    createCanvas(300, 600);
    angleMode(RADIANS)
    frameRate(30)

    background(40);
    fillAllInstances(230, 30);
}
function draw() {
    allInstances.forEach(element => {
        element.draw()        
    });

    angle += angleV
    angleV += angleA

    x++;
}

function fillAllInstances(color, margin){        
    for (let x = 0; x < width + margin; x += margin) {
        for (let y = 0; y < height + margin; y += margin) {
            if(!(x=== width || y === height || x === 0 || y === 0)){
                allInstances.push(new BasicShape(x, y, color))
            } 
        }
      }
}   

let x = 0;
let lastX = x;
function mousePressed(){
    //lastX + 10 is for the mobile users they quick two times accidentally
    if(lastX + 10 < x){
        if(onOff === true){
            background(230);
            angleV = 0.1
            fillAllInstances(30, 15);
            onOff = false
        } else {
            allInstances = [];
            background(40);
            angleV = 0.05
            fillAllInstances(230, 30);
            onOff = true
        }
    }
    lastX = x
}


