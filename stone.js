class stone{
	constructor(x,y,a,b)
	{
	// assign options to the rubber ball
	    var options = {
			restitution:0.8,
			friction:0.9,
			density:12
		}

		this.a=a;
        this.b=b;
		this.body=Bodies.rectangle(x, y, this.a, this.b, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.a,this.b);
			pop()
	}

}