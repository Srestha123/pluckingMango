class Mango{
    constructor(x,y,radius){
        var options= {
           'restitution': 0.5,
            'friction': 0.3,
            'isStatic':true
        }
       this.radius=radius;
       this.body= Bodies.circle(x,y,radius,options);
       this.image = loadImage("mango.png");
       World.add(world,this.body);

    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
    
}