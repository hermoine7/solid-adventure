class Box  {
  constructor(x, y, width, height){
  /*var options{
    'restitution':0.08,
    'friction': 0.4
  }*/
  this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
display(){
  var angle = this.body.angle;
  var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("red");
        rect(pos.x,pos.y, this.width, this.height);
       // var r= random(1,10);
        //this.body.velocity.x=r;
        pop();
console.log(this.body.position.x);

}
};
