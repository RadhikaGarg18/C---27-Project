class Bob {
    constructor(x, y) {
      var options = {
          isStatic: true,
          'restitution':0.3,
          'friction':5,
          'density':1
       }
      this.body = Bodies.circle(x,y,20,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("pink");
      stroke("black");
      strokeWeight(3);
      ellipse(0, 0, 97, 97);
      pop();
    }
  };