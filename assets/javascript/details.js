"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const carteId = params.get("slug");
  console.log(carteId);

  async function fetchCarte() {
    const url = `https://hp-api.lainocs.fr/characters/${carteId}`;
    const response = await fetch(url);
    const data = await response.json();

    displayFilm(data);
  }

  function displayFilm(carte) {
    console.log(carte);
    const template = document.getElementById("carte-template");

    template.style.display = "block"; // Rend la carte visible
    template.querySelector(".carte-nom").textContent = `Nom : ${carte.name}`;

    template.querySelector(
      ".carte-maison"
    ).textContent = `Maison : ${carte.house}`;

    template.querySelector(
      ".carte-acteur"
    ).textContent = `Acteur : ${carte.actor}`;

    template.querySelector(
      ".carte-patronus"
    ).textContent = `Patronus : ${carte.patronus}`;
    template.querySelector(".carte-img").src = carte.image;

    switch (carte.house) {
      case "Gryffindor":
        template.querySelector(".carte-nom").style.color = "#d3a625";
        template.querySelector(".carte-maison").style.color = "#d3a625";
        template.querySelector(".carte-acteur").style.color = "#d3a625";
        template.querySelector(".carte-patronus").style.color = "#d3a625";
        template.style.backgroundColor = "#740001";
        break;

      case "Hufflepuff":
        template.querySelector(".carte-nom").style.color = "#372e29";
        template.querySelector(".carte-maison").style.color = "#372e29";
        template.querySelector(".carte-acteur").style.color = "#372e29";
        template.querySelector(".carte-patronus").style.color = "#372e29";
        template.style.backgroundColor = "#eeb939";
        break;

      case "Ravenclaw":
        template.querySelector(".carte-nom").style.color = "#946b2d";
        template.querySelector(".carte-maison").style.color = "#946b2d";
        template.querySelector(".carte-acteur").style.color = "#946b2d";
        template.querySelector(".carte-patronus").style.color = "#946b2d";
        template.style.backgroundColor = "#0e1a40";

        break;

      case "Slytherin":
        template.querySelector(".carte-nom").style.color = "#aaaaaa";
        template.querySelector(".carte-maison").style.color = "#aaaaaa";
        template.querySelector(".carte-acteur").style.color = "#aaaaaa";
        template.querySelector(".carte-patronus").style.color = "#aaaaaa";
        template.style.backgroundColor = "#1a472a";
        break;

      default:
        if (DarkMode != "light-mode") {
          template.querySelector(".carte-nom").style.color = "#ffffff";
          template.querySelector(".carte-maison").style.color = "#ffffff";
          template.querySelector(".carte-acteur").style.color = "#ffffff";
          template.querySelector(".carte-patronus").style.color = "#ffffff";
          template.style.backgroundColor = "#000000";
        } else {
          template.querySelector(".carte-nom").style.color = "#000000";
          template.querySelector(".carte-maison").style.color = "#000000";
          template.querySelector(".carte-acteur").style.color = "#000000";
          template.querySelector(".carte-patronus").style.color = "#000000";
          template.style.backgroundColor = "#ffffff";
        }
    }
  }

  fetchCarte();
});
