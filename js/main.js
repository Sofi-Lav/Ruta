// Swiper ініціалізація
new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Динамічний рік у футері
document.getElementById("year").textContent = new Date().getFullYear();
