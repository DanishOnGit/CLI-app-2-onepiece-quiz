const chalk=require("chalk");
var readlineSync=require("readline-sync");
console.log(chalk.bold.magenta("Let\'s play a game!\n"));
var userName=readlineSync.question(chalk.yellow("May I have your name?\n"));
console.log("Welcome "+chalk.rgb(51,51,255)(userName.toUpperCase())+" to the \"ONE PIECE\" quiz !")
console.log(chalk.bgBlue("\nNOTE:"),"Type your answer as a,b,or c. \nCorrect answer gives you +2 points.\nIncorrect answer gets you -1 point.\n")

var score=0;
var quesList=[{question:"Q1)Who is the author of the anime One Piece?\na)Katsura Hoshino\nb)Hikaru Nakamura\nc)Eiichiro Oda\n",answer:"c"},
              {question: "Q2)Which is top level gear of Luffy?\na)4\nb)5\nc)6\n",answer:"b"},
              {question:"Q3)Which fruit did Luffy eat?\na)Aka Aka Nomi\nb)Gomu Gomu\nc)Bara Bara Nomi\n",answer:"b"},
              {question:"Q4)Which arc is currently going on in One Piece?\na)Wano\nb)Dresserosa\nc)East Blue\n",answer:"a"},
              {question:"Q5)What is the real name of Blackbeard?\na)Teach\nb)Edward Newgate\nc)Kuzan\n", answer:"a"},{question:"Q6)Which is the final island where One Piece is located?\na)Alabasta\nb)Skypiea\nc)Laughtale\n",answer:"c"}]

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.cyanBright(question));
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("You are Right!"));
    score=score+2;
    console.log("Your current score is ",score);
    console.log("-----------------");
  }
  else{
    console.log(chalk.red("You are Wrong!"));
    console.log(chalk.bgBlue("Correct answer is ",answer.toUpperCase()));
    score=score-1;
    console.log("Your current score is ",score);
    console.log(chalk.bold("-----------------"));
  }
}
for(var i=0;i<quesList.length;i++){
  play(quesList[i].question,quesList[i].answer);
}
console.log(chalk.cyan("YAY! You have completed the quiz.\n"));
console.log(chalk.bgYellow("Your final score is "),score);
console.log('---------------');

var highScore=["\nDANISH  \n","JAY  \n"];
if(score>9){
highScore.unshift(chalk.bgYellow(userName.toUpperCase()));
console.log("CONGRATS "+ userName.toUpperCase()+"!! You have entered the Leaderboard.\n");
console.log(chalk.bgRed("LEADERBOARD---\n"));
for(i=0;i<highScore.length;i++){
  console.log(chalk.bold(highScore[i]));
}
}
else{
  console.log("Nice try "+userName.toUpperCase()+".But you need to score higher to enter the Leaderboard.\n");
  console.log(chalk.bgRed("LEADERBOARD---\n"));
  for(i=0;i<highScore.length;i++){
  console.log(chalk.bold(highScore[i]));
  }
}
