// Paste the full JS content from your canvas here
// Smooth scrolling for navigation (if any links added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission (demo)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Message sent! (Demo form - configure real backend)');
  form.reset();
});

// Optional: simple fade-in animations for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add('fade-section');
  observer.observe(section);
});
