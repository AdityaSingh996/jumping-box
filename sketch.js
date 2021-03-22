var canvas;
var music;
var ground1;
var ground2;
var ground3;
var ground4;
var ball;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1=createSprite(0,580,360,30);
    ground1.shapeColor="green";

    ground2=createSprite(295,580,200,30);
    ground2.shapeColor="blue";

    ground3=createSprite(515,580,200,30);
    ground3.shapeColor="yellow";

    ground4=createSprite(740,580,220,30);
    ground4.shapeColor="red";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),200,20,20);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=4;
}

function draw() {
    background(rgb(83,19,16));
    //create edgeSprite
  edges=createEdgeSprites();
  ball.bounceOff(edges);
  //console.log(isTouching())


    //add condition to check if box touching surface and make it box
    if(ground1.isTouching(ball) && ball.bounceOff(ground1)){
        ball.shapeColor="green";
        music.play();
    }
    
    if(ground2.isTouching(ball) ){
        ball.shapeColor="blue";
        ball.velocityX=0;
        ball.velocityY=0;
         music.stop();
        }

     if(ground3.isTouching(ball) && ball.bounceOff(ground3)){
         ball.shapeColor="yellow";
        }


    if(ground4.isTouching(ball) && ball.bounceOff(ground4)){
         ball.shapeColor="red";
        }
        drawSprites();
    }
        