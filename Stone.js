class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:2,
            density:0.2
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius);
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}