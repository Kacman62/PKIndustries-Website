document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const long = btn.previousElementSibling;
    long.classList.toggle('hidden');
    btn.textContent = long.classList.contains('hidden') ? 'Read More' : 'Read Less';
  });
});