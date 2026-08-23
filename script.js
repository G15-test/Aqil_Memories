// Aqil's Memory Website
// This file is intentionally simple so the website
// works perfectly with GitHub Pages.

document.addEventListener("DOMContentLoaded", () => {

  // Smoothly reveal elements when they enter the screen

  const cards = document.querySelectorAll(
    ".photo-card, .date-card, .letter"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );


  cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(20px)";

    card.style.transition =
      "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(card);

  });

});

