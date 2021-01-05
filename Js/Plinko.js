class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = this.body.circleRadius;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        fill("blue")
        ellipseMode(CENTER)
        ellipse(position.x,position.y,this.radius,this.radius);
    }
}