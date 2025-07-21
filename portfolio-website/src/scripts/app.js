document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const description = item.querySelector('.description');
            description.classList.toggle('visible');
        });
    });
});