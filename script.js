// Função para alternar entre modo claro e escuro
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

// Aplicar tema salvo no localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const button = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        button.textContent = '☀️ Modo Claro';
    }
});

// Detectar preferência do sistema (modo escuro automático)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
    document.body.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle').textContent = '☀️ Modo Claro';
}