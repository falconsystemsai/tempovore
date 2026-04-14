const revealItems = document.querySelectorAll('.reveal');
const focalImage = document.querySelector('#focal img');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener('mousemove', (event) => {
  if (!focalImage) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 8;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  focalImage.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.015)`;
});

window.addEventListener('mouseleave', () => {
  if (!focalImage) return;

  focalImage.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
});
