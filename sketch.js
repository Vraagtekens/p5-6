let angle = 0;
let angleV = 0.2;
let angleA = 0;
let sticks = []

function setup() {
    createCanvas(400, 400);
    angleMode(RADIANS)

    fillArraySticks();
}
function draw() {
    angleV = map(mouseX, 0, width, -0.2, 0.2)
    angleV = constrain(angleV, -0.2, 0.2)


    background(40);

    sticks.forEach(element => {
        element.draw()        
    });


    angle += angleV
    angleV += angleA
}

function fillArraySticks(){    

    const margin = 40
    
    for (let x = 0; x < width + margin; x += margin) {
        for (let y = 0; y < height + margin; y += margin) {
            if(!(x === width || y === width || x === 0 || y === 0)){
                sticks.push(new Stick(x, y))
            } 
        }
      }

}

