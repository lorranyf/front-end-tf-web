function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}

// Exibir a página de login como padrão
document.addEventListener('DOMContentLoaded', () => {
    showPage('login');
});
