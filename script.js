
window.addEventListener('scroll', () => {
  document.querySelectorAll('.text-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
});
