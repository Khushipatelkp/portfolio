// NAV SHADOW
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

// ====== 🌻 CURSOR SUNFLOWER TRAIL EFFECT ======
document.addEventListener("mousemove", (e) => {
  createFlower(e.pageX, e.pageY);
});

function createFlower(x, y) {
  const flower = document.createElement("img");
  flower.src = "sunflower.png";
  flower.classList.add("cursor-flower");

  flower.style.left = x + "px";
  flower.style.top = y + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 1200);
}

// Disable on mobile
if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.removeEventListener("mousemove", () => {});
}
