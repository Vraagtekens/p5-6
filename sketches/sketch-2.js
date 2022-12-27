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

}

function draw() {
    points.forEach(element => {
        element.draw()
        element.changeCoord()

    });

    if(frameCount === 1){
        noLoop()
    }
}

function mousePressed(){
    (points[0].x <= mouseX + 1 && points[0].x >= mouseX - 1)
}

let points = [];
let maxWidth;
let minWidth;
let maxHeight; 
let minHeiht;
function setFrameSize(){
    let length = 400;
    if(windowHeight >= windowWidth){
        length = 300
    }
    if(windowWidth < 600){
        length = 200
    }

    maxWidth = (width/2) + length
    minWidth = (width/2) - length
    maxHeight = (height/2) + length
    minHeiht = (height/2) - length
}

function fillArray(){
    setFrameSize();
    const margin = 50
    for (let x = minWidth; x < maxWidth; x += margin) {
        for (let y = minHeiht; y < maxHeight; y += margin) {
            if(!(x === minWidth || x === maxWidth || y === minHeiht || y === maxHeight))
            points.push(new BasicShape(x, y))
        }
    }
}


class BasicShape{
    startX
    startY
    x
    y
    size

    r
    g
    b
    
    constructor(x, y){
        this.x = x
        this.y = y
        this.startX = x
        this.startY = y
        this.size = 30;

        this.changeColor()
    }

    draw(){
        push();
        //color
        
        fill(this.r, this.g, this.b, this.b)

        //Transform shape
        rectMode(CENTER)
        translate(this.x, this.y)
        // rotate(frameCount * 0.1);
        
        //Draw shape
        rect(0, 0, this.size, this.size, 0)
        pop();
    }

    changeCoord(){
        const i = 2
        if((this.x <= mouseX + 2 && this.x >= mouseX - 2) &&
        (this.y <= mouseY + 2 && this.y >= mouseY - 2)){
            this.x = this.startX;
            this.y = this.startY
            this.size = 50

            this.changeColor()
        } else {
            this.size = 30
            if (this.x < mouseX){
                this.x += i
            } else {
                this.x -= i
            }
    
            if (this.y  < mouseY){
                this.y += i
            } else {
                this.y -= i
            }
        }
    }

    changeColor(){
        this.r = random(30, 255)
        this.g = random(30, 255)
        this.b = random(30, 255)
    }

    
    
}




