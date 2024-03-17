"use strict";

// affiche les cartes
document.addEventListener("DOMContentLoaded", function () {
  const fetchCarte = async () => {
    try {
      const url = "https://hp-api.lainocs.fr/characters";
      const response = await fetch(url);
      let data = await response.json();
      data = data;
      displayCarte(data);
    } catch (e) {
      alert("Il y a un probleme");
    }
  };

  const displayCarte = (data) => {
    const DarkMode = document.querySelector("body").className;
    let container = document.getElementById("carte-container");
    let template = document.getElementById("carte-template");

    container.innerHTML = "";
    container.appendChild(template);

    data.forEach((carte) => {
      const carteCard = template.cloneNode(true);

      carteCard.style.display = "block";
      carteCard.querySelector(".carte-nom").textContent = `Nom : ${carte.name}`;

      carteCard.querySelector(
        ".carte-maison"
      ).textContent = `Maison : ${carte.house}`;

      carteCard.querySelector(
        ".carte-acteur"
      ).textContent = `Acteur : ${carte.actor}`;

      carteCard.querySelector(
        ".carte-patronus"
      ).textContent = `Patronus : ${carte.patronus}`;
      carteCard.querySelector(".carte-img").src = carte.image;

      carteCard.querySelector(
        ".carte-details-link"
      ).href = `detail.html?slug=${carte.slug}`;

      switch (carte.house) {
        case "Gryffindor":
          carteCard.querySelector(".carte-nom").style.color = "#d3a625";
          carteCard.querySelector(".carte-maison").style.color = "#d3a625";
          carteCard.querySelector(".carte-acteur").style.color = "#d3a625";
          carteCard.querySelector(".carte-patronus").style.color = "#d3a625";
          carteCard.style.backgroundColor = "#740001";
          break;

        case "Hufflepuff":
          carteCard.querySelector(".carte-nom").style.color = "#372e29";
          carteCard.querySelector(".carte-maison").style.color = "#372e29";
          carteCard.querySelector(".carte-acteur").style.color = "#372e29";
          carteCard.querySelector(".carte-patronus").style.color = "#372e29";
          carteCard.style.backgroundColor = "#eeb939";
          break;

        case "Ravenclaw":
          carteCard.querySelector(".carte-nom").style.color = "#946b2d";
          carteCard.querySelector(".carte-maison").style.color = "#946b2d";
          carteCard.querySelector(".carte-acteur").style.color = "#946b2d";
          carteCard.querySelector(".carte-patronus").style.color = "#946b2d";
          carteCard.style.backgroundColor = "#0e1a40";

          break;

        case "Slytherin":
          carteCard.querySelector(".carte-nom").style.color = "#aaaaaa";
          carteCard.querySelector(".carte-maison").style.color = "#aaaaaa";
          carteCard.querySelector(".carte-acteur").style.color = "#aaaaaa";
          carteCard.querySelector(".carte-patronus").style.color = "#aaaaaa";
          carteCard.style.backgroundColor = "#1a472a";
          break;

        default:
          if (DarkMode != "light-mode") {
            carteCard.querySelector(".carte-nom").style.color = "#ffffff";
            carteCard.querySelector(".carte-maison").style.color = "#ffffff";
            carteCard.querySelector(".carte-acteur").style.color = "#ffffff";
            carteCard.querySelector(".carte-patronus").style.color = "#ffffff";
            carteCard.style.backgroundColor = "#000000";
          } else {
            carteCard.querySelector(".carte-nom").style.color = "#000000";
            carteCard.querySelector(".carte-maison").style.color = "#000000";
            carteCard.querySelector(".carte-acteur").style.color = "#000000";
            carteCard.querySelector(".carte-patronus").style.color = "#000000";
            carteCard.style.backgroundColor = "#ffffff";
          }
      }

      container.appendChild(carteCard);
    });
  };

  fetchCarte();
});
