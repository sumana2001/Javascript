var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var started=true;
var count=0;

$(".btn").on("click",function(event){
    var userChosenColour=event.target.id;
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
   
})
function nextSequence(){
    userClickedPattern = [];
    count=count+1;
    $("h1").text("Level "+(count));
    var randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}

function playsound(key){
    var audio = new Audio("sounds/" + key + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence(),1000;
            })
        }
    }
    else{
        var audio = new Audio("wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    count=0;
    gamePattern=[];
    started=true;
}

$(document).keypress(function(){
    if(started==true){
        $("h1").text("Level 0");
        nextSequence();
        started=false;
    }
});
