var catImage1,catImage2,catImage3,catImage4;
var bgImage;
var mouseImage1;
var tom,jerry;

function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
   catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
     catImage4=loadAnimation("images/cat4.png");
     mouseImage1=loadAnimation("images/mouse1.png");
     mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
     mouseImage4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600,20,20);
    tom.addAnimation("tomSleeping",catImage1);
    tom.scale=0.2;
    jerry=createSprite(100,600,20,20);
    jerry.addAnimation("jerryStanding",mouseImage1);
    jerry.scale=0.15;
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x- jerry.x <(tom.width-jerry.width)/2){
     tom.velocityX=0;
     tom.addAnimation("tomStanding",catImage4);
     tom.changeAnimation("tomStanding");
     tom.x=300;
     tom.scale=0.2;
     jerry.addAnimation("jerryLaughing",mouseImage4);
     jerry.changeAnimation("jerryLaughing");
     jerry.scale=0.15;
   }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  
 
if(keyCode===LEFT_ARROW){
   jerry.addAnimation("mouseTeasing",mouseImage2);
   jerry.changeAnimation("mouseTeasing");
   jerry.frameDelay=25;


   tom.addAnimation("catRunning",catImage2);
  tom.changeAnimation("catRunning");
   tom.velocityX=-5;
}



}
