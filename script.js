
    function toggleTheme() {
        const body = document.body;
        const button = document.querySelector('.theme-toggle');
        
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            button.textContent = '🌙 Modo Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            button.textContent = '☀️ Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const savedTheme = localStorage.getItem('theme');
        const button = document.querySelector('.theme-toggle');
        
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            button.textContent = '☀️ Modo Claro';
        }
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
        document.body.setAttribute('data-theme', 'dark');
        document.querySelector('.theme-toggle').textContent = '☀️ Modo Claro';
    }