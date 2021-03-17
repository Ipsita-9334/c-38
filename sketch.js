var playerCount, gameState = 0, allPlayers;
var game, form, player;
var database;
var car1, car2, car3, car4, cars;


function setup(){
    createCanvas(displayWidth - 30, displayHeight - 110);
    database = firebase.database();
   
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   
   if(gameState === 1){
       clear();
       game.play();
       console.log("play Function called");
   }

   if(gameState === 2){
       game.end();
   }
}

