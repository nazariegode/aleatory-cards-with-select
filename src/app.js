import "bootstrap";
import "./style.css";

window.onload = () => {
  /* funcion para generar las cartas de manerea aleatoria por color y iconco */
  const generateCards = numCards => {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

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

    for (let i = 0; i < numCards; i++) {
      const randomNumber = Math.floor(Math.random() * number.length);
      const randomIcon = Math.floor(Math.random() * icon.length);
      const selecNumber = number[randomNumber];
      const selecIcon = icon[randomIcon];

      /* la seleccion aleatoria de numeros e iconos, la paso al modelo de carta atraves el dom */
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("col-2", "m-1");
      cardDiv.innerHTML = `
        <div class="card">

          <div class="card-number">${selecNumber}</div>
          <div class="card-number">${selecIcon}</div>
          
          <div class="card-center">${selecNumber}</div>

          <div class="card-number2">${selecIcon}</div>
          <div class="card-number2">${selecNumber}</div>
          
        </div>
      `;

      /* segun el icono que me arroje, si es uno será color negro, sino color rojo */
      if (selecIcon === "♦" || selecIcon === "♥") {
        cardDiv.style.color = "red";
      } else {
        cardDiv.style.color = "black";
      }

      cardContainer.appendChild(cardDiv);
    }
  };

  /* funcion sorteoButton recoge el valor ingresado por el usuario al darle el boton sorteo */
  const sorteoButton = document.getElementById("sorteoButton");
  sorteoButton.addEventListener("click", () => {
    const numCardsInput = document.getElementById("numCardsInput").value;
    generateCards(numCardsInput);
  });

  /* funcion clasificacionButton ordena las cartas de menor a mayor que fueron arrojadas cuando el ususario presionó el boton sorteoButton */
  const clasificacionButton = document.getElementById("clasificacionButton");
  clasificacionButton.addEventListener("click", () => {
    /* Obtener todas las cartas */
    const cardContainer = document.getElementById("cardContainer");
    const cards = Array.from(cardContainer.getElementsByClassName("col-2"));

    /* Ordenar las cartas por el valor de su primer número (selecNumber) */
    cards.sort((a, b) => {
      const numberA = a.querySelector(".card-number").textContent;
      const numberB = b.querySelector(".card-number").textContent;
      return numberA.localeCompare(numberB, undefined, { numeric: true });
    });

    /* Limpiar el contenedor de cartas y agregarlas en el nuevo orden */
    cardContainer.innerHTML = "";
    cards.forEach(card => {
      cardContainer.appendChild(card);
    });
  });
};
