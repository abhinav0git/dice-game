var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  showConfetti("left");
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  showConfetti("right");
} else {
  document.querySelector("h1").innerHTML = "Draw";
}


function showConfetti(position) {
  var confettiElement = document.createElement("span");
  confettiElement.innerHTML = "🎊🎊";
  confettiElement.classList.add("confetti");

  if (position === "left") {
    confettiElement.classList.add("left-confetti");
  } else if (position === "right") {
    confettiElement.classList.add("right-confetti");
  }

  document.body.appendChild(confettiElement);
}
