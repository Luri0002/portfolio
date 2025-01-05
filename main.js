//menu js
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

//toggle add/remove classes nemt

menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

////////////////////////////////////////////////
//Det nedenstående har jeg fået hjælp af chatgpt til at lave

// Tilføj en event listener, når siden er loadet
window.addEventListener("load", function () {
  const cirkel = document.querySelector(".cirkel"); // Vælg cirklen
  const h2 = document.querySelector("footer .footer_h2"); // Vælg span'en med klassen footer_h2

  // Tilføj en scroll event listener til vinduet
  window.addEventListener("scroll", function () {
    const cirkelRect = cirkel.getBoundingClientRect(); // Hent cirklens position og størrelse
    const h2Rect = h2.getBoundingClientRect(); // Hent positionen og størrelsen på footer_h2 (span)

    // Juster offset afhængig af skærmstørrelse
    let offset = 135; // Standard offset for desktop

    // Hvis skærmbredden er mindre end 768px (mobil)
    if (window.innerWidth < 768) {
      offset = 40; // Juster offset for mobil
    }
    // Hvis skærmbredden er mellem 768px og 1024px (tablet)
    else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      offset = 80; // Juster offset for tablet
    }

    // Hvis bunden af cirklen når toppen af h2'eren
    if (cirkelRect.bottom >= h2Rect.top) {
      // Tilføj det responsivt justerede offset
      cirkel.style.top = h2Rect.top - cirkelRect.height + offset + "px"; // Juster tallet som nødvendigt
    } else {
      // Behold sticky, hvis ikke den rammer h2'eren
      cirkel.style.top = ""; // Brug den default værdi, som CSS allerede har defineret for sticky
    }
  });
});
