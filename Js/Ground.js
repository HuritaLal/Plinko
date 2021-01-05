class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        World.add(world,this.body);
    }
    display(){
      var position = this.body.position ;
      push();
        translate(position.x,position.y);
        rectMode(CENTER);
        noStroke();
        fill(132, 68, 221);
        rect(0,0,this.width,this.height);
        pop();   
    }
} 