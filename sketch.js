
var cat, catImg2,catImg3;
var mouse, mouseImg2,mouseImg3;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catHappy = loadAnimation("images/cat4.png");
    mouseHappy = loadAnimation("images/mouse4.png");
    yummy   =   loadImage("images/yummy.png")
}

function setup(){
    canvas = createCanvas(1000,600);
    cat = createSprite(900, 450);
    cat.addAnimation("cat", catImg1);
    cat.scale = 0.15;
    //cat.debug = true;
    cat.setCollider("circle",-590,200,100);
    mouse = createSprite(250,450);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.scale = 0.08;
   // mouse.debug = true;
    mouse.setCollider("rectangle",0,0,600,600);
    
    yum = createSprite(250,400);
    yum.addImage(yummy);
    yum.scale = 0.2;
    yum.visible = false;
}

function draw() {

    background(bg);
    if(cat.isTouching(mouse)){
        cat.addAnimation("cat happy", catHappy);
        cat.changeAnimation("cat happy");
        cat.velocityX = 0;
        mouse.destroy();
        yum.visible = true;
        
    }

    drawSprites();
}


function keyPressed(){
    if (keyCode === UP_ARROW){
        mouse.addAnimation("mouse teasing", mouseImg2);
        mouse.changeAnimation("mouse teasing");
        mouse.frameDelay = 25;
    }
   
    if(keyCode === DOWN_ARROW){
        mouse.addAnimation("mouse standing", mouseImg1);
        mouse.changeAnimation("mouse standing");
    }
    if (keyCode === LEFT_ARROW){
        cat.addAnimation("cat running", catImg2);
        cat.changeAnimation("cat running");
        cat.frameDelay = 10;
        cat.velocityX = -3;
    }

    if (keyCode === RIGHT_ARROW){
        cat.addAnimation("cat sitting", catImg1);
        cat.changeAnimation("cat sitting");
        cat.velocityX = 0;
    }

}