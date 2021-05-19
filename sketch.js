const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rub,stun,irun,plane;

    function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rub = new Rubber(800,450,40);
    stun = new stone(600,450,80,40);
    irun = new iron(400,450,40,40);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rub.display();
    stun.display();
    irun.display();
    
}