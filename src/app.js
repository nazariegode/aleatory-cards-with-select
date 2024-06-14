import "bootstrap";
import "./style.css";

window.onload = () => {
  const generateCardsDetails = () => {
    const cardNumber1 = document.getElementById("number1");
    const cardNumber2 = document.getElementById("number2");
    const cardNumber3 = document.getElementById("number3");

    const cardIcon1 = document.getElementById("icon1");
    const cardIcon2 = document.getElementById("icon2");

    const number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const icon = ["♦", "♥", "♠", "♣"];

    const randomNumber = Math.floor(Math.random() * number.length);
    const randomIcon = Math.floor(Math.random() * icon.length);

    const selecNumber = number[randomNumber];
    const selecIcon = icon[randomIcon];

    cardNumber1.innerHTML = selecNumber;
    cardNumber2.innerHTML = selecNumber;
    cardNumber3.innerHTML = selecNumber;

    cardIcon1.innerHTML = selecIcon;
    cardIcon2.innerHTML = selecIcon;

    if (selecIcon === "♦" || selecIcon === "♥") {
      cardNumber1.style.color = "red";
      cardNumber2.style.color = "red";
      cardNumber3.style.color = "red";
      cardIcon1.style.color = "red";
      cardIcon2.style.color = "red";
    } else {
      cardNumber1.style.color = "black";
      cardNumber2.style.color = "black";
      cardNumber3.style.color = "black";
      cardIcon1.style.color = "black";
      cardIcon2.style.color = "black";
    }
  };

  generateCardsDetails();

  const changeCardButton = document.getElementById("changeCardButton");
  changeCardButton.addEventListener("click", generateCardsDetails);
};
