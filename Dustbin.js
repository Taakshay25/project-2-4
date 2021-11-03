class Dustbin{
    constructor(x,y) {
        this.x=x
        this.y=y
        this.dustbinWidth=200
        this.dustbinHeight=100
        this.wallThickness=20
        this.angle=0

        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isSatic:true})
        this.leftWallbody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
        Matter.body.setAngle(this.leftWallbody,this.angle);

        this.rightWallBody=Bodies.rectangle(this(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true}))

        Matter.body.setAngle(this.rightWallBody,-1*this.angle)
        World.add(world,this.bottomBody)
        World.add(world,this.leftWallbody)
        World.add(world,ythis.rightWallBody)
    }
    display()
    {
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallbody.position;
    var posRight=this.rightWallBody.position

    push()
    tanslate(posLeft.x,posLeft.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    rotate(this.angle)
    rect(0,0,this,wallThickness,this.s=dustbinHeight)
    pop()

    push()
    translate(posBottom.x,posBottom.y)
    rectMode(CENTER)
    Stroke(255)
    angleMode(RADIANS)
    fill(255)
    rect(0,0,this.dustbinWidth,this.wallThickness)
    pop()
    }
}
