randomNumber1 = Math.round(Math.random() * 5 + 1);
dice = "dice" + randomNumber1 + ".png";
image = "images/" + dice;
randomNumber2 = Math.round(Math.random() * 5 + 1);
dice2 = "dice" + randomNumber2 + ".png";
image2 = "images/" + dice2;

document.querySelector("img").setAttribute("src", image);
document
  .querySelector("div")
  .lastElementChild.querySelector("img")
  .setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = " 🚩 Player 1 wins !";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw !";
} else {
  document.querySelector("h1").textContent = " Player 2 wins ! 🚩";
}
