    class Dustbin{
        constructor(x1, y1, x2, y2, x3, y3) {
        var options = {

            'restitution':0,
            'friction':0.75,
            'density':1.2,
            'isStatic': true
        }
        
        this.body1 = Bodies.rectangle(x1,y1, 20, 100, options);
        World.add(world, this.body1);

        this.body2 = Bodies.rectangle(x2,y2, 20, 100, options);
        World.add(world, this.body2);

        this.body3 = Bodies.rectangle(x3,y3, 200, 20, options);
        World.add(world, this.body3);
        }
        display(){
            var pos1 = this.body1.position;
            var pos2 = this.body2.position;
            var pos3 = this.body3.position;
            rectMode(CENTER);
            fill("green");
            rect(pos1.x, pos1.y, 20, 100);
            rect(pos2.x, pos2.y, 20, 100);
            rect(pos3.x, pos3.y, 200, 20);
        }
        }