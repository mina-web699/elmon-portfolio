// ==================== 1. TYPEWRITER EFFECT ====================
const textSpan = document.querySelector('.text-animate');
const words = ['Frontend Developer', 'React Developer', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    textSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex -= 1;
  } else {
    textSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex += 1;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
};

document.addEventListener('DOMContentLoaded', typeEffect);

// ==================== 2. MOBILE NAVBAR TOOGLE ====================
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('header nav');
const navLinksClick = document.querySelectorAll('header nav a');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

navLinksClick.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// ==================== 3. SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== 4. ACTIVE LINK ON SCROLL ====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active-link');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active-link');
    }
  });
});