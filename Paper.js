class Paper {
	constructor(x,y,radius){
		var options = {
			isStatic : false,
			restitution : 0.5,
			friction : 0.8,
			density : 0.4
		}
	this.body = Bodies.circle(x,y,radius/2,options);
	this.radius = radius;
	this.image = loadImage("paper.png");

	 World.add(world, this.body);
	}

	display(){
		 imageMode(RADIUS);
		 var pos = this.body.position;
        image(this.image, pos.x, pos.y ,this.radius,this.radius);
	}
}