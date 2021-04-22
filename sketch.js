var cat, catImage1, catImage2, catImage3, catImage4;
var mouse, mImage1, mImage2, mImage3, mImage4;
var garden, gardenImage;

function preload() {
    catImage1 = loadAnimation("cat1.png");
    catImage2 = loadAnimation("cat2.png");
    catImage3 = loadAnimation("cat3.png");;
    catImage4 = loadAnimation("cat4.png");

    mImage1 = loadAnimation("mouse1.png");
    mImage2 = loadAnimation("mouse2.png");
    mImage3 = loadAnimation("mouse3.png");
    mImage4 = loadAnimation("mouse4.png");

    gardenImage = loadImage("garden.png");

}
    
function setup(){
    createCanvas(2500,800);

    garden = createSprite(750,400,2500,800);
    garden.addImage("park",gardenImage);

    //create tom and jerry sprites here
    cat = createSprite(1050, 500, 80, 50);
    cat.addAnimation("billi1",catImage1);
    cat.scale = 0.1;

    mouse = createSprite(350, 650, 20, 20);
    mouse.addAnimation("chuha1",mImage1);
    mouse.scale = 0.09;

}

function draw() {

    background(255);
    //Write condition here to eva,lute if tom and jerry collide
    text(mouseX , 'cat', mouseY, 10, 45);

    if(cat.x - mouse.x< cat.width/2 + mouse.width/2
       && mouse.x - cat.x< mouse.width/2 + cat.width/2 
       && cat.y - mouse.y< cat.height/2 + mouse.height/2
       && mouse.x - cat.x< mouse.height/2 + cat.height/2 ){

        cat.changeAnimation("billi3.0",catImage3);
        mouse.changeAnimation("chuha",mImage3);

    }
    
     drawSprites();

}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  cat.x = cat.x - 25;
  cat.changeAnimation("billi2.0",catImage2);
  mouse.changeAnimation("chuha2",mImage2);

}

if(keyCode === DOWN_ARROW){
    cat.y = cat.y + 25;

}
