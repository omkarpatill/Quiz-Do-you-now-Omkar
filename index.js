var readlineSync=require('readline-sync');

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("You are correct");
  }
  else{
    console.log("You are wrong");
  }
}

// play("What is my surname? ","patil");
// play("where do I live? ","pune")

var question1={
  question:"What is my surname?",
  answer:"patil"
}
var question2={
  question:"where do I live??",
  answer:"pune"
}

var qa=[question1,question2];

for(var i=0; i<qa.length; i++){
  var currentQuestion=qa[i];
  play(currentQuestion.question, currentQuestion.answer);
}