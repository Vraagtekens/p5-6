function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES)
}
function draw() {
    orbitControl();
    background(30);
    rotateX(frameCount *0.6)
    rotateY(frameCount*0.2)

    noFill()

    for (let i = 0; i < 40; i++) {
        
        // let value = (100 + i * 10)
        // stroke(255, value, 255)

        let r = map(sin(frameCount / 2), -1, 1, 100, 200)
        let g = map(i, 0, 20, 0, 255)
        let b = map(cos(frameCount), -1, 1, 255, 0)
        
        stroke(r, g, b)
        rotate(5)

        beginShape()

        for (let j = 0; j < 360; j += 100){
            let rad = i * 3
            let x = rad * cos(j)
            let y = rad * sin(j)
            let z = sin(frameCount * 2 + i * 10) * 90
            
            vertex(x, y, z)
            
        }
        endShape(CLOSE)
    
        }
}
