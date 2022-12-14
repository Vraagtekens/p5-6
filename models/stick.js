class Stick{
    x
    y
    
    constructor(x, y, color){
        this.x = x
        this.y = y
        this.color = color
    }

    draw(){
        push();
        //Transform shape
        rectMode(CENTER)
        translate(this.x, this.y)
        rotate(angle + this.x + this.y )
    
        //Draw shape
        noStroke()
        fill(255)
        rect(0, 0, 30, 5, 20)
        pop();
    }



}