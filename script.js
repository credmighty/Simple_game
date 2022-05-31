alert("Don\'t forget to show some love... The support really matters ❤️.");
window.onload = function(){
            //Get Elements Here
            var home = document.getElementById("home");
            var game = document.getElementById("game");
            var play = document.getElementById("play");
            var back = document.getElementById("back");
            var canvas = document.getElementById("canvas");
            var up = document.getElementById("up");
            var down = document.getElementById("down");
            var help = document.getElementById("how");
            var HighScoreDisplay = document.getElementById("HighScore");
            //help
            help.onclick = function(){
                alert("The goal of the game is to collect as many coins as possible");
                alert("Click \"up\" to move up");
                alert("Click \"down\" to move down");
                alert("Have fun!");
                }
                
//Play and go back home
play.onclick = function(){home.style.display = "none"; game.style.display = "block";}
back.onclick = function (){home.style.display = "block"; game.style.display = "none";}
//Canvas Drawings
var context = canvas.getContext("2d");
//Display User Score
var score = 0;
var high_score = score;
function ShowScore(){
    context.clearRect(0, 0, 200, 15);
    context.fillStyle = "red";
    context.fill();
    context.font = "10px";
    context.fillText(`Score: ${score}`, 150, 10);
    //High Score
    if (score > high_score){
        high_score = score;
    }
    highScore.innerHTML = `High Score: ${high_score}`;
    }
//Player
const Player_X = 40; //This constant is used in the collision detection only
var Player_Y = 150;
           
function MakePlayer(){
                    
    up.onclick = function(){Player_Y > 15 ? Player_Y -= 20 : Player_Y = 15;}
    down.onclick = function(){Player_Y < 250 ? Player_Y += 20 : Player_Y = 250;}
                    
    context.clearRect(0, 0, 50, 300);
    context.beginPath();
    context.rect(25, Player_Y, 20, 15);
    context.fillStyle = "brown";
    context.fill();
    context.lineWidth = "2";
    context.stroke();
       }
 //Coins
var Coin_X = 200;
 var Coin_Y = Math.floor((Math.random() * 220) + 40);
function MakeCoins(){
     function MoveCoins(){
          context.clearRect(50, 10, 150, 290);
           Coin_X -= 5;
           context.beginPath();
           context.arc(Coin_X, Coin_Y, 4, 0, 2 * Math.PI);
           context.fillStyle = "yellow";
           context.fill();
           if (Coin_X <= 0){
               Coin_X = 300;
               Coin_Y = Math.floor((Math.random() * 240) + 40);
                            }
                        }
                        MoveCoins();
                }
 //Collision Detection
function CollisionDetect(){
if ((Coin_Y >= Player_Y) && (Coin_Y <= Player_Y + 17) && (Coin_X == 40)){
          score++;
          Coin_X  = 0;
          ShowScore();
               }
          }
                
setInterval(ShowScore, 50);
setInterval(MakePlayer, 50);
setInterval(MakeCoins, 50);
setInterval(CollisionDetect, 50);
            }