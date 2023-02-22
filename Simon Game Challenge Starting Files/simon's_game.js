
var buttonColors=["red","blue","green","yellow"];
var randomNumber=0;
var gamePattern=[];
var chosenColor;
var count=0,i=0;
var userseq=[];

$(document).keypress(nextSequence);

function wrong(){
  var score=count-1;
  $("h1").html("Game Over <br> Score="+score+"<br>Press any key to restart");
  $("body").css("background-color","red");
  var wrongaud= new Audio("C:\Users\KIIT\Desktop\WEBDEV\challenges\Simon Game Challenge Starting Files\sounds\wrong.mp3");
  wrongaud.play();
  count=0;
  i=0;
  gamePattern=[];
}
function original(){
  $("body").css("background-color","white");
  $("h1").html("Simon's Game");
  }

$(".red").click(function(){
  chosenColor="red";
  $("."+chosenColor).fadeOut(100).fadeIn(100);
  var audio= new Audio("sounds/"+chosenColor+".mp3");
  audio.play();
  if(chosenColor==gamePattern[i]){
    // console.log(i);
    i++;

    if(i==count){
      setTimeout(nextSequence,1000);
  }
  }
  else{
    wrong();
    // setTimeout(original,5000);


  }
})


function nextSequence(){
  original();
  i=0;
randomNumber=Math.floor(Math.random()*4);
  // console.log(randomNumber);
  var randomColor=buttonColors[randomNumber];
  // console.log(randomColor);

  $("."+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio= new Audio("sounds/"+randomColor+".mp3");
  audio.play();// $("."+randomColor).css("background-color",randomColor);
  count++;
  // console.log(count);
  gamePattern.push(randomColor);
}


$(".blue").click(function(){
  chosenColor="blue";
  $("."+chosenColor).fadeOut(100).fadeIn(100);
  var audio= new Audio("sounds/"+chosenColor+".mp3");
  audio.play();
  console.log(i);
  console.log(count);
  if(chosenColor==gamePattern[i]){
    i++;
    if(i==count){
    setTimeout(nextSequence,1000);
  }
  }
  else{
    wrong();
    // setTimeout(original,5000);
  }
})


$(".green").click(function(){
  chosenColor="green";
  $("."+chosenColor).fadeOut(100).fadeIn(100);
  var audio= new Audio("sounds/"+chosenColor+".mp3");
  audio.play();
  if(chosenColor==gamePattern[i]){
    i++;
    if(i==count){
    setTimeout(nextSequence,1000);
  }

  }
  else{
    wrong();
    // setTimeout(original,5000);

  }
})


$(".yellow").click(function(){
  chosenColor="yellow";
  $("."+chosenColor).fadeOut(100).fadeIn(100);
  var audio= new Audio("sounds/"+chosenColor+".mp3");
  audio.play();
  if(chosenColor==gamePattern[i]){
    i++;
    if(i==count){
    setTimeout(nextSequence,1000);
  }
  }
  else{
    wrong();
    // setTimeout(original,5000);

  }
})
