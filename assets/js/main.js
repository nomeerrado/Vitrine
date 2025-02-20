document.addEventListener('DOMContentLoaded', function() {
    // Controle do carrossel de imagens
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const images = card.querySelectorAll('.product-image');
        const dots = card.querySelectorAll('.image-nav-dot');
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Remove classes ativas
                images.forEach(img => img.classList.remove('active'));
                dots.forEach(d => d.classList.remove('active'));
                
                // Ativa a imagem e o dot correspondentes
                images[index].classList.add('active');
                dot.classList.add('active');
            });
        });
    });

    // Controle do modal
    const modal = document.querySelector('.modal');
    const modalImage = modal.querySelector('.modal-image');
    const modalClose = modal.querySelector('.modal-close');
    const modalPrev = modal.querySelector('.modal-prev');
    const modalNext = modal.querySelector('.modal-next');
    
    let currentCard = null;
    let currentImageIndex = 0;

    // Abrir modal ao clicar na imagem
    productCards.forEach(card => {
        const images = card.querySelectorAll('.product-image');
        
        images.forEach(img => {
            img.addEventListener('click', () => {
                currentCard = card;
                const allImages = card.querySelectorAll('.product-image');
                currentImageIndex = Array.from(allImages).indexOf(img);
                
                updateModalImage();
                modal.classList.add('active');
            });
        });
    });

    // Fechar modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Navegação do modal
    modalPrev.addEventListener('click', () => {
        const images = currentCard.querySelectorAll('.product-image');
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateModalImage();
    });

    modalNext.addEventListener('click', () => {
        const images = currentCard.querySelectorAll('.product-image');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateModalImage();
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });

    // Atualizar imagem do modal
    function updateModalImage() {
        const images = currentCard.querySelectorAll('.product-image');
        const currentImage = images[currentImageIndex];
        modalImage.src = currentImage.src;
        modalImage.alt = currentImage.alt;
    }
}); 