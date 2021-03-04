class Chain{
    constructor(body1,body2,offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        var options = {
            length: 10,
            stiffness: 0.07,
            bodyA: body1,
            bodyB: body2,
            PointB: {x:this.offsetX, y: this.offsetY}
            
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        var Anchor1X = PointA.x
        var Anchor1Y = pointA.y

        var Anchor2Y = PointB.y + this.offsetY
        var Anchor2X = PointB.x + this.offsetX
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

        
    }

}