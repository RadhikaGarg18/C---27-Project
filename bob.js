class Bob {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0.3,
          'friction':5,
          'density':1
       }
       this.x = x;
       this.y = y;
      this.body = Bodies.circle(x,y,100,options);
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(225,0,225)
      ellipseMode(CENTER);
      ellipse(0, 0, 100);
      pop();
    }
  };