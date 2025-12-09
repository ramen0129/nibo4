// Shared functionality can go here
document.addEventListener('DOMContentLoaded', () => {
    console.log('GenAI School Site Loaded 🍜');

    // Simple navigation highlight
    const path = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === path.split('/').pop() || (path.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});
