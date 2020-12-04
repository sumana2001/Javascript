var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];

$(".btn").on("click",function(event){
    var userChosenColour=event.target.id;
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
   
})
function nextSequence(){
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

$(document).keypress(function(){
    nextSequence();
})
