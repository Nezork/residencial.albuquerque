// Script para o site Residencial Roma

document.addEventListener('DOMContentLoaded', function() {
    // Header com efeito ao rolar
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Filtro da galeria
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const galeriaItems = document.querySelectorAll('.galeria-item');
    
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove classe active de todos os botões
            categoriaBtns.forEach(b => b.classList.remove('active'));
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galeriaItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Tabs de plantas
    const plantaTabBtns = document.querySelectorAll('.planta-tab-btn');
    const plantaItems = document.querySelectorAll('.planta-item');
    
    plantaTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove classe active de todos os botões
            plantaTabBtns.forEach(b => b.classList.remove('active'));
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            const plantaId = this.getAttribute('data-planta');
            
            plantaItems.forEach(item => {
                if (item.id === plantaId) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    });

    // Validação do formulário
    const form = document.querySelector('.formulario');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const telefone = document.querySelector('input[name="telefone"]');
            
            // Validação simples de telefone (apenas exemplo)
            if (telefone && telefone.value.length < 10) {
                e.preventDefault();
                alert('Por favor, insira um número de telefone válido com DDD.');
                telefone.focus();
            }
        });
    }

    // Animação de elementos ao rolar a página
    const animateElements = document.querySelectorAll('.diferencial-card, .galeria-item, .planta-item, .formulario');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Lightbox customizado
    const customLightbox = document.getElementById('custom-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.getElementById('close-lightbox');

    document.querySelectorAll('.galeria-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            lightboxImg.src = this.href;
            lightboxCaption.textContent = this.getAttribute('data-title') || '';
            customLightbox.classList.remove('hidden');
        });
    });

    closeLightbox.addEventListener('click', function() {
        customLightbox.classList.add('hidden');
        lightboxImg.src = '';
    });

    customLightbox.addEventListener('click', function(e) {
        if (e.target === customLightbox) {
            customLightbox.classList.add('hidden');
            lightboxImg.src = '';
        }
    });
});