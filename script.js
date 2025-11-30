// NAV SHRINK ON SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 40);
});

// MOBILE MENU
const menuBtn = document.querySelector(".mobile-menu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.querySelector(".mobile-nav").classList.toggle("open");
  });
}
