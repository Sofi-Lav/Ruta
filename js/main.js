const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("nav");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Динамічний рік у футері
document.getElementById("year").textContent = new Date().getFullYear();
