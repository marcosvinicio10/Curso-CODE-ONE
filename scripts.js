// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botão "Voltar ao Topo"
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal de "Saiba Mais"
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.querySelector('h3').textContent = button.closest('.module').querySelector('h3').textContent;
        modal.querySelector('p').textContent = button.closest('.module').querySelector('.module-header p').textContent;
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Animação de aparição dos módulos
const modulesContainer = document.querySelector('.modules-container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

observer.observe(modulesContainer);