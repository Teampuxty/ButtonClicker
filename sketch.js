var TotalClicks
var ClicksPerClick
var img
var Level
var XP
var LevelXP

function setup() {
  createCanvas(400, 400);
  TotalClicks = 0
  ClicksPerClick = 1
  Level = 1
  XP = 0
  LevelXP = 60
  img = loadImage("Button.png")
}

function draw() {
  background(1);
  fill(255)
  textSize(48)
  text(TotalClicks,50,50)
 image(img,150,150,100,100)
 if (TotalClicks == 100){
     fill(255)
     textSize(50)
     text("YOU WIN!",100,200)
 }
}

function mousePressed(){
  TotalClicks = TotalClicks+ClicksPerClick
}