const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));
        
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Por favor, insira seu nome');
            isValid = false;
        }
        
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Por favor, insira seu e-mail');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um e-mail válido');
            isValid = false;
        }
        
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Por favor, insira sua mensagem');
            isValid = false;
        }
        
        if (isValid) {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        }
    });
}

// Função para exibir mensagens de erro
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    
    const errorElement = document.createElement('small');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.display = 'block';
    errorElement.style.marginTop = '5px';
    
    formGroup.appendChild(errorElement);
}

// Efeito de destaque nos cards de nota
const noteCards = document.querySelectorAll('.note-card');
if (noteCards.length > 0) {
    noteCards.forEach(card => {
        const editBtn = card.querySelector('.edit-btn');
        
        card.addEventListener('mouseenter', () => {
            if (editBtn) editBtn.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            if (editBtn) editBtn.style.opacity = '0';
        });
    });
}

// Adiciona classe de scroll ao header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
