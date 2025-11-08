// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a, .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('volunteer-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in PawKind! We will contact you soon.');
            this.reset();
        });
    }

    // Create floating paw icons dynamically
    function createFloatingPaws() {
        const pawIcons = ['🐾', '❤️', '🐶', '🐱'];
        const existingPaws = document.querySelectorAll('.floating-paw');
        
        // Remove existing dynamically created paws
        existingPaws.forEach(paw => {
            if (!paw.hasAttribute('style')) {
                paw.remove();
            }
        });
        
        for (let i = 0; i < 8; i++) {
            const paw = document.createElement('div');
            paw.classList.add('floating-paw');
            paw.innerHTML = pawIcons[Math.floor(Math.random() * pawIcons.length)];
            
            paw.style.left = `${Math.random() * 90 + 5}%`;
            paw.style.top = `${Math.random() * 80 + 10}%`;
            paw.style.animationDelay = `${Math.random() * 5}s`;
            paw.style.fontSize = `${Math.random() * 1 + 1.2}rem`;
            
            document.body.appendChild(paw);
        }
    }
    
    createFloatingPaws();
});