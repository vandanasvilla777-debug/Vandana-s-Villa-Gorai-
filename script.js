const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  });
});

const form = document.getElementById('inquiry-form');
const statusMessage = document.querySelector('.form-status');

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  statusMessage.textContent = `Thank you${name ? `, ${name}` : ''}! Your enquiry is ready to be connected to your email service.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();