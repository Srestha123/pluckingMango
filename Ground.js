class Ground{
    constructor(x,y,width,height){
        var options={
    'density':5,
    'isStatic':true
        }
        this.width=width;
        this.height=height;
        this.body= Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}