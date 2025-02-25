// Mode terang/gelap
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Kuiz Interaktif
const answers = document.querySelectorAll('.answer');
answers.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.correct) {
            alert('Benar!');
        } else {
            alert('Salah! Coba lagi.');
        }
    });
});
