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
// Fade-in Sections on Scroll
// ============================
const faders = document.querySelectorAll('section');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  section.classList.add('fade-section');
  appearOnScroll.observe(section);
});

// ============================
// Contact Form Demo
// ============================
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent (demo).');
  contactForm.reset();
});
