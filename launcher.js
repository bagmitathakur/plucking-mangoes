class Launcher{

    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.05,
        length:11
    }
    this.pointB=pointB;
    this.bodyA=bodyA;
    this.launcherObj=Constraint.create(options);
    World.add(world,this.launcherObj);
    

    }
    attach(bodyA){
    this.launcherObj.bodyA=bodyA;

    }
    fly(){



        this.launcherObj.bodyA=null;
    }


    display(){   
        if(this.launcherObj.bodyA){ 
    var pointA=this.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(0.1);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}
}