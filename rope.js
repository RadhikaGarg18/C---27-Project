class Rope{
    constructor(body1,body2,offsetX,offsetY){
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y: this.offsetY},
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        this.offsetX = offsetX
        this.offsetY = offsetY
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        stroke("white")
       

        
            strokeWeight(2);
            var Anchor1X = pointA.x
            var Anchor1Y = pointA.y
    
            var Anchor2Y = pointB.y + this.offsetY
            var Anchor2X = pointB.x + this.offsetX
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    
             
        
    }

}