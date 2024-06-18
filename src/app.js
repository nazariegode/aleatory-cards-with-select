import "bootstrap";
import "./style.css";

window.onload = () => {
  let cardArray = [];

  /* función para generar las cartas de manera aleatoria por color e icono */
  const generateCards = numCards => {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    cardArray = [];

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

      /* la selección aleatoria de números e iconos, la paso al modelo de carta a través del DOM */
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

      /* según el icono que me arroje, si es uno será color negro, sino color rojo */
      if (selecIcon === "♦" || selecIcon === "♥") {
        cardDiv.style.color = "red";
      } else {
        cardDiv.style.color = "black";
      }

      cardContainer.appendChild(cardDiv);
      cardArray.push({
        number: selecNumber,
        icon: selecIcon,
        element: cardDiv
      });
    }
  };

  /* función sorteoButton recoge el valor ingresado por el usuario al darle el botón sorteo */
  const sorteoButton = document.getElementById("sorteoButton");
  sorteoButton.addEventListener("click", () => {
    const numCardsInput = document.getElementById("numCardsInput").value;
    generateCards(numCardsInput);
  });

  /* función para ordenar las cartas */
  const selectSort = arr => {
    const cardOrder = [
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
    arr.sort((a, b) => {
      const numberA = cardOrder.indexOf(a.number);
      const numberB = cardOrder.indexOf(b.number);
      return numberA - numberB;
    });
    return arr;
  };

  /* función para actualizar el contenedor de cartas */
  const updateCardContainer = cards => {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    cards.forEach(card => {
      cardContainer.appendChild(card.element);
    });
  };

  /* función clasificacionButton ordena las cartas de menor a mayor que fueron arrojadas cuando el usuario presionó el botón sorteoButton */
  const clasificacionButton = document.getElementById("clasificacionButton");
  clasificacionButton.addEventListener("click", () => {
    /* Ordenar las cartas usando el algoritmo de selección */
    const sortedCards = selectSort(cardArray);

    /* Actualizar el contenedor de cartas con el nuevo orden */
    updateCardContainer(sortedCards);
  });
};
