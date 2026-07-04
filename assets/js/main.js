/* ===== LOADER ===== */
const loader = document.getElementById('loader');

window.addEventListener('load', () => {
    // Wait for the bar animation to finish (1.8s) then fade out
    setTimeout(() => {
        loader.classList.add('hide');
    }, 1800);
});

/* ===== NAVBAR: scroll shrink + active link highlight ===== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // Sticky style on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ===== MOBILE MENU ===== */
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.add('open'));
}
if (navClose) {
    navClose.addEventListener('click', () => navMenu.classList.remove('open'));
}
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* ===== TYPED TEXT EFFECT ===== */
const typedEl = document.getElementById('typed');
const phrases = [
    'Web Experiences.',
    'Beautiful UIs.',
    'React Apps.',
    'Vue.js Projects.',
    'Responsive Designs.',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(type, isDeleting ? 60 : 100);
}

if (typedEl) type();

/* ===== SCROLL REVEAL ===== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Stagger cards/items that are siblings
            const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
            const index = siblings.indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));
