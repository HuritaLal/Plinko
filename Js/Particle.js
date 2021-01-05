class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.5,
            friction: 0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color=color(random(255,255,255), random(0,255,208), random(255,255,0));
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var position = this.body.position;
        push();
     //   colorMode(HSB);
        noStroke();
        translate(position.x,position.y);
       
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
} 