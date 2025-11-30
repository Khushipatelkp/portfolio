// ============================
// Smooth Scroll for Navigation
// ============================
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ============================
// Floating Flowers Animation
// ============================
const flowerContainer = document.querySelector('.floating-flowers');
const totalFlowers = 15; // Number of flowers

for (let i = 0; i < totalFlowers; i++) {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = 5 + Math.random() * 5 + 's';
  flower.style.width = 20 + Math.random() * 40 + 'px';
  flower.style.height = flower.style.width;
  flowerContainer.appendChild(flower);
}
