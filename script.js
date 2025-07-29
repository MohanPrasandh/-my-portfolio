// Enable click/tap tooltips for skills (mobile and keyboard accessible)
document.addEventListener('DOMContentLoaded', function () {
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(function (item) {
    // Show tooltip on click (mobile/tap)
    item.addEventListener('click', function (e) {
      // Hide all other tooltips
      skillItems.forEach(function (el) {
        if (el !== item) el.classList.remove('show-tooltip');
      });
      item.classList.toggle('show-tooltip');
      e.stopPropagation();
    });
    // Hide tooltip on blur (keyboard)
    item.addEventListener('blur', function () {
      item.classList.remove('show-tooltip');
    });
  });
  // Hide tooltip when clicking outside
  document.addEventListener('click', function () {
    skillItems.forEach(function (item) {
      item.classList.remove('show-tooltip');
    });
  });
});
// Contact form thank you message
const contactForm = document.getElementById('contactForm');
const thankYouMsg = document.getElementById('thankYouMsg');
if (contactForm && thankYouMsg) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactForm.style.display = 'none';
    thankYouMsg.style.display = 'block';
    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = '';
      thankYouMsg.style.display = 'none';
    }, 3500);
  });
}
// Animated purple motion particles
function createParticles() {
  const container = document.createElement('div');
  container.className = 'particles';
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 18 + 12;
    p.style.width = p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.bottom = '-' + (Math.random() * 40 + 10) + 'px';
    p.style.background = `radial-gradient(circle at 30% 30%, #a78bfa 60%, #7c3aed 100%)`;
    p.style.animationDelay = (Math.random() * 8) + 's';
    container.appendChild(p);
  }
  document.body.appendChild(container);
}
createParticles();
// Dark/Light mode toggle
const toggleBtn = document.getElementById('toggle-mode');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

// Responsive nav (scroll to section)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
