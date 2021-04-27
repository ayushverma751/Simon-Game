var gamePattern = [];
var buttonColours = ["red" , "blue" , "green" , "yellow"];
var userClickedPattern = [];
var firstkey = 0;
var level = 0;
$("body").keypress(function(event) {

  if(firstkey===0)
  {
  level+=1;
  $("#level-title").html("Level " + level);
  firstkey=1;
  nextSequence();
}
});
$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  $("#" + userChosenColour).fadeOut(100).fadeIn(100);
  animate(userChosenColour);
  playSound(userChosenColour);
  if(checkArray(userClickedPattern,gamePattern))
  {
    if(userClickedPattern.length===level)
    {

      level+=1;
      $("#level-title").html("Level " + level);
      userClickedPattern = [];
      setTimeout(nextSequence , 1000);
    }
  }
  else
  {
    gamePattern = [];
    userClickedPattern = [];
    firstkey = 0;
    level = 0;
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 100);
    $("#level-title").html("Game Over, Press Any Key to Restart");
  }
});

function nextSequence() {
  var randomNumber=Math.random()*4;
  randomNumber=Math.floor(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  animate(randomChosenColour);
  playSound(randomChosenColour);
}

function checkArray(a1,a2)
{
  for(var i=0;i<Math.min(a1.length,a2.length);i++)
  {
    if(a1[i]!==a2[i])
    {
      return false;
    }
  }
  return true;
}



function playSound(name) {
  if(name==="blue")
  {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  else if(name==="red")
  {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  else if(name==="yellow")
  {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  else if(name==="green")
  {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
  }
}
function animate(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  },100);
}
