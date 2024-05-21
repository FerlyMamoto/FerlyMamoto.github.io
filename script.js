const isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('dark-mode-toggle');

    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', toggleDarkMode);
});
