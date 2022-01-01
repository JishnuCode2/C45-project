//Project Overview:  creating the variables, adding the files and creating the form.



var back_img, blastImage, cannonballImg, balloonImg, lifeImg, backGround1;
var canvas
var database, gameState,  form, game, player;
var allPLayers, balloon1, balloon2,balloon3,balloon4, cannonballs;
var balloons = [];
var allPlayers
var playerCount ;
var obstacleGroup, scoreGroup, scoreImg, back2;
var gameSound, blastSound, scoreSound;
var powerCoins, obstacles;
function preload() {
    back_img = loadImage("assets/backgroundImage.jpg");
    blastImage = loadImage("assets/blast.png");
    cannonballImg = loadImage("assets/cannonball.png");
    balloonImg = loadImage("assets/hotairballoon1.png")
    lifeImg = loadImage("assets/life.png");
    scoreImg = loadImage("assets/goldCoin.png");
    back2 = loadImage("assets/backgroundImage2.png");
    gameSound = loadSound("assets/background_music.mp3");
    scoreSound = loadSound("assets/checkpoint.mp3");
    blastSound = loadSound("assets/cannon_explosion.mp3");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back2);
  if(playerCount === 4){
     game.updateState(1)
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}