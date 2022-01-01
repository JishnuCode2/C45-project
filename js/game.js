class Game{
    constructor(){
       this.gameOver = false;
       this.resetButton = createButton("");
       this.playerName = createElement("h2");
       this.downKeyActive = false
       this.leader1 = createElement("h3");
       this.leader2 = createElement("h3");
       this.leaderBoardTitle = createElement("h2")
       this.leader3 = createElement("h3");
       this.leader4 = createElement("h3");
    }

    getState(){
      
        database.ref("gameState").on("value",function(data){
             gameState = data.val();
         })
    }

    updateState(state){
        database.ref("/").update({
            gameState : state
        })
    }

    start(){
        form = new Form();
        form.display();
        player = new Player();
        playerCount = player.getCount();

        balloon1 = createSprite(width/2-100,height/2);
        balloon2 = createSprite(width/2+100,height/2);
        balloon1.addImage("balloon1Animation", balloonImg);
        balloon1.addImage("blast",blastImage);
        balloon2.addImage("balloon2Animation", balloonImg);
        balloon2.addImage("blast",blastImage);
        balloon1.debug = true;
        balloon2.debug = true;
        balloon1.scale = 0.2;
        balloon2.scale = 0.2;
        balloon3 = createSprite(width/2-100,height/2);
        balloon4 = createSprite(width/2+100,height/2);
        balloon3.addImage("balloon1Animation", balloonImg);
        balloon3.addImage("blast",blastImage);
        balloon4.addImage("balloon2Animation", balloonImg);
        balloon4.addImage("blast",blastImage);
        balloon3.debug = true;
        balloon4.debug = true;
        balloon3.scale = 0.2;
        balloon4.scale = 0.2;

        balloon1.setCollider("rectangle",0,-100,200,200);
        balloon2.setCollider("rectangle",0,-100,200,200);
        balloon3.setCollider("rectangle",0,-100,200,200);
        balloon4.setCollider("rectangle",0,-100,200,200);
        balloons = [balloon1,balloon2,balloon3,balloon4];

       obstacleGroup = new Group();
   
       scoreGroup = new Group();
    }
  }