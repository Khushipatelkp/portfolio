// MOBILE NAV TOGGLE
const mobileMenu = document.getElementById("mobile-menu");
const mobileNav = document.getElementById("mobile-nav");

if (mobileMenu && mobileNav) {
  mobileMenu.addEventListener("click", () => {
    if (mobileNav.style.display === "block") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "block";
    }
  });
}

// FOOTER YEAR
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 🌻 CURSOR SUNFLOWER TRAIL
document.addEventListener("mousemove", (e) => {
  const flower = document.createElement("img");
  flower.src = "sunflower.png";
  flower.className = "cursor-flower";
  flower.style.left = `${e.clientX}px`;
  flower.style.top = `${e.clientY}px`;

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 1200);
});
