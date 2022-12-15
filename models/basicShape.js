class BasicShape{
    x
    y
    
    constructor(x, y, color){
        this.x = x
        this.y = y
        this.color = color
    }

    draw(){
        push();
        //color

        
        //Transform shape
        rectMode(CENTER)
        translate(this.x, this.y - 10)
        rotate(angle + this.x + this.y)
        
        //Draw shape
        noStroke()
        fill(this.color)
        // rect(0, (angle + this.x + this.y) * 0.0225, 5, 5, 20)
        rect(0, 10, 5, 5, 20)
        pop();
    }

}