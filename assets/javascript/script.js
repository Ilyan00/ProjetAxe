"use strict";

// Fonction pour les tabs
const lightbox = new SimpleLightbox(".card a");
const filterizr = new Filterizr(".ecole-elements", {
  gutterPixels: 50,
});
const filtersList = document.querySelectorAll(".filters li");
filtersList.forEach(function (filter) {
  filter.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    filter.classList.add("active");
    const ecole_elements = document.querySelector(".ecole-elements");
    const DarkMode = document.querySelector("body").className;
    switch (filter.textContent) {
      case "Gryffondor":
        ecole_elements.style.backgroundColor = "#740001";
        ecole_elements.style.color = "#d3a625";
        break;

      case "Poufsouffle":
        ecole_elements.style.backgroundColor = "#eeb939";
        ecole_elements.style.color = "#372e29";
        break;

      case "Serdaigle":
        ecole_elements.style.backgroundColor = "#0e1a40";
        ecole_elements.style.color = "#946b2d";
        break;

      case "Serpentard":
        ecole_elements.style.backgroundColor = "#1a472a";
        ecole_elements.style.color = "#aaaaaa";
        break;

      default:
        if (DarkMode == "light-mode") {
          ecole_elements.style.backgroundColor = "#ffffff";
          ecole_elements.style.color = "#000000";
        } else {
          ecole_elements.style.backgroundColor = "#000000";
          ecole_elements.style.color = "#ffffff";
        }
        break;
    }
  });
});
