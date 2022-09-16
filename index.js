const readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question("What's your name ?\n");
var score = 0;

console.log(chalk.green("Welcome "+ username + " to test if you are also shinchan fan 😁!\n"))


function play(que,ans){
  
  var userAnswer = readlineSync.question(que)

  if(userAnswer==ans){
    console.log(chalk.green("you are right"))
    score++;
    console.log(score)
  }
  else{
    console.log(chalk.red("you are wrong"))
    console.log(score)
  }
}
var questions = [
  {
     question: `1. Shinchan's mother is Mitsi.
  a: True
  b: False
  \n` ,

  answer: "a"
},

{
  question: `2. Where does Shinchan live ??
  a: Tokyo
  b: Katsukabe
  c: Osaka
  d: Hawaii	\n`,

  answer: "b"
},
  {
  question: `3. Shinchan's friends are :
  a: Kazama, Neni, Masao, Suzuki
  b: Nobita, Sizoka, Gian, Sonio
  c: Miyoko, Payan, Kabao, Sabo
  d: Ash, Broke, Kazama, Nobita	\n`,

  answer: "a"
},
  {
  question: `4. Shinchan's dog's color is
  a: Black
  b: Brown
  c: Red
  d: White \n`,

  answer: "d"
},
  {
  question: `5. Shinchan hates _______ the most.
  a: Rice
  b: Onion
  c: Capsicum
  d: Beans \n`,

  answer: "c"
},
  {
  question: `6. Shinchan's most intelligent friend is
  a: Kazama
  b: Neni
  c: Masao
  d: Nobita \n`,

  answer: "a"
},
] 

for(i=0;i<questions.length;i++)
  {
    currentquestion=questions[i]

    play(currentquestion.question,currentquestion.answer)
  }


if(score > 4){
  console.log("YAY! You Scored: ", score);
  console.log("You Are a Shinchan Fan "+username+"-chan 😁 !!");
}
else{
  console.log("Oops !! You Should Watch Shinchan More "+username+" buddy !!");
}
