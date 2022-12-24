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

        points.forEach(e => {
            element.checkCoord(e)
        });
    });

    if(frameCount === 1){
        noLoop()
    }
}

let x = false;
function mousePressed(){
    if(x === false){
        loop();
        x = true;
    } else {
        noLoop()
        x = false;
    }
}


let points = [];
function fillArray(){
    let length = 400;
    if(windowHeight >= windowWidth){
        length = 300
    }
    if(windowWidth < 600){
        length = 200
    }

    const margin = 50
    const maxWidth = (width/2) + length
    const minWidth = (width/2) - length
    const maxHeight = (height/2) + length
    const minHeiht = (height/2) - length

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

        this.r = random(30, 255)
        this.g = random(30, 255)
        this.b = random(30, 255)
    }

    draw(){
        push();
        //color
        
        fill(this.r, this.g, this.b)

        //Transform shape
        rectMode(CENTER)
        translate(this.x, this.y)
        // rotate(angle + this.x + this.y)
        
        //Draw shape
        noStroke()
        rect(0, 0, this.size, this.size, 30)
        pop();
    }

    changeCoord(){
        const i = 1
        if (this.x < mouseX){
            this.x += i
        } else if(this.x > mouseX) {
            this.x -= i
        }

        if (this.y < mouseY){
            this.y += i
        } else if(this.x > mouseY) {
            this.y -= i
        }

    }

    checkCoord(e){
        //checkt ook eigen waarde
        if((this.x === e.x || this.y === e.y) && (e.x === this.startX || e.y === this.startY)){
            this.x = e.startX
            this.y = e.startY
            this.b = random(30, 255)
        } 
    }

}




