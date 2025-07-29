// Collapsible dropdowns for Experience, Skills, Expertise
const collapsibles = document.querySelectorAll('.collapsible-header');
collapsibles.forEach(btn => {
  btn.addEventListener('click', function() {
    const parent = this.parentElement;
    parent.classList.toggle('active');
    // Close others
    document.querySelectorAll('.collapsible').forEach(c => {
      if (c !== parent) c.classList.remove('active');
    });
  });
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
