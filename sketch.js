//Create variables here
var dog, happyDog, database,  foodStock;
var dog12
var readStock

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200,20,20)
 dog.addImage("dog",dog12)
 dog.scale=0.2;
 database =firebase.database()
 foodStockref=database.ref('Food');
 foodStockref.on("Value",readStock,showerror);
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_AROW)){
  writeStock(foodStock);
  dog.addImage(dogimg2);
}
  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Kew To Feed dog milk",100,100);
  

}

function readStock(data){
 foodStock= data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
  }


