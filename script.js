// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});
