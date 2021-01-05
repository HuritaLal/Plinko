const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Matter;
const Bodies = Matter.Bodies;

var engine,world;
var particles = [];
var plinkos = [];
var ground,rows;
var row1,row2,row3,row4,row5,row6,row7,row9,row10,row11;

function setup(){
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,600,1700,10);

	row11 = new Rows(10,500,10,300)
	row1 = new Rows(100,500,10,300);
	row2 = new Rows(200,500,10,300);
	row3 = new Rows(300,500,10,300);
	row4 = new Rows(400,500,10,300);
	row5 = new Rows(500,500,10,300);
	row6 = new Rows(600,500,10,300);
	row7 = new Rows(700,500,10,300);
	row8 = new Rows(800,500,10,300);
	row9 = new Rows(900,500,10,300);
	row10 = new Rows(990,500,10,300);


	for(var j = 40; j<= width; j = j+50){
		plinkos.push(new Plinko(j , 75))
	  }
	  for(var j = 15; j<= width-10; j = j+50){
		plinkos.push(new Plinko(j ,125))
	  }
	  for(var j = 40; j<= width-10; j = j+50){
		plinkos.push(new Plinko(j ,175))
	  }
	  for(var j = 15; j<= width-10; j = j+50){
		plinkos.push(new Plinko(j ,225))
	  }
	  for(var j = 40; j<= width-10; j = j+50){
		plinkos.push(new Plinko(j ,275))
	  }
	  for(var j = 15; j<= width-10; j = j+50){
		plinkos.push(new Plinko(j ,325))
	  }
	  for(var j = 40; j<= width-10; j = j+50){
		plinkos.push(new Plinko(j ,375))
	  }
	  for(var j = 15; j<= width-10; j = j+50){
		plinkos.push(new Plinko(j ,425))
	  }
	
	}
	function draw(){
		background(87, 24, 160);
		if(frameCount % 30 === 0){
			particle = new Particle(random(100,500),random(100,900),10);
			particles.push(particle);
		}

		Engine.update(engine);
		
		for(var i = 0; i < particles.length; i++){
			particles[i].display();
		}
		for(var j = 0; j<plinkos.length; j++){
			plinkos[j].display();
		}

		ground.display();
		row11.display();
		row1.display();
		row2.display();
		row3.display();
		row4.display();
		row5.display();
		row6.display();
		row7.display();
		row8.display();
		row9.display();
		row10.display();

		drawSprites();
	}

