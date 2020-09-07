class Tree{
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width+100,this.height+500);
    }
}