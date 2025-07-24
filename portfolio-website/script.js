document.addEventListener('DOMContentLoaded', () => {

    // --- Lenis Smooth Scroll Initialization ---
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- Mobile Navigation ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // --- Typewriter Effect ---
    const typewriterSpan = document.querySelector('.typewriter');
    if (typewriterSpan) {
        const textArray = ["I am a Full Stack Developer.", "I am a Problem Solver.", "I am a Lifelong Learner.", "I am a Tech Enthusiast.", "I am a Creative Thinker.", "I am a Prompt Engineer.", "I am a Software Engineer.", "I am a Web Developer."];
        let textArrayIndex = 0, charIndex = 0;
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typewriterSpan.textContent += textArray[textArrayIndex].charAt(charIndex++);
                setTimeout(type, 100);
            } else { setTimeout(erase, 2000); }
        }
        function erase() {
            if (charIndex > 0) {
                typewriterSpan.textContent = textArray[textArrayIndex].substring(0, --charIndex);
                setTimeout(erase, 50);
            } else {
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                setTimeout(type, 500);
            }
        }
        setTimeout(type, 1000);
    }
    
    // --- Particles.js Initialization ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": { "number": { "value": 60, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": true }, "size": { "value": 2, "random": true }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" } },
            "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" } }, "modes": { "bubble": { "distance": 200, "size": 3, "duration": 2, "opacity": 0.8 } } },
            "retina_detect": true
        });
    }

    // --- Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links .nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // --- EmailJS Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const serviceID = 'service_f1th5vj';
        const templateID = 'template_zwu6p88';
        const publicKey = 'qsdHGb9NXsu9TFpEG';
        
        formStatus.textContent = 'Sending...';
        emailjs.init({ publicKey: publicKey });
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.className = 'success';
                contactForm.reset();
                setTimeout(() => { formStatus.textContent = ''; }, 5000);
            }, (err) => {
                formStatus.textContent = 'Failed to send message. Please try again.';
                formStatus.className = 'error';
                setTimeout(() => { formStatus.textContent = ''; }, 5000);
            });
    });

});