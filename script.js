const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.textContent = nav.classList.contains('open') ? '×' : '☰';
});

const cards = document.querySelectorAll('.grid article');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

cards.forEach((card) => observer.observe(card));
