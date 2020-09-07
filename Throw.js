class Throw{
    constructor(bodyA,bodyB){
        var options={
         'bodyA':bodyA,
         'bodyB':bodyB,
         'stiffness':0.04,
         'length':10                                     
        }
        this.bodyA=bodyA;
        this.bodyB=bodyB;
        this.launch=Constraint.create(options);
        World.add(world,this.launch);
    }
   
    attach(body){
        this.launch.bodyA=body;

    }
    fly(){
        this.launch.bodyA=null;
    }
    display(){
       push();
        strokeWeight(3)
        if(this.launch.bodyA){
        line(this.launch.bodyA.position.x,this.launch.bodyA.position.y,this.launch.bodyB.position.x,this.launch.bodyB.position.y);
       pop();
    }
}
}