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
        rect(0, 0, this.size, this.size, 0)
        pop();
    }

    changeCoord(){
        const i = 2
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
            this.size = random(10, 35)
        } 
    }
    
}