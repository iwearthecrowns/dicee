//create two variables that generate random numbers; add 1 to make the number 1-6
var randomNumber1=((Math.floor(Math.random()*6))+1);
var randomNumber2=((Math.floor(Math.random()*6))+1);

//access the DOM to change the dice image
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

//compare the values of the random numbers to determine a winner, display varying text for each scenario
function whoWon(){
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    document.querySelector("h2").innerHTML="<a href='dicee2.html'>Roll Again</a>";
  }
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
    document.querySelector("h2").innerHTML="<a href='dicee2.html'>Roll Again</a>";
  }
else{
    document.querySelector("h1").innerHTML="Tie. Roll again.";
    document.querySelector("h2").innerHTML="<a href='dicee2.html'>Roll Again</a>";
}
}

whoWon();
