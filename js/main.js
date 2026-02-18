// ========================================
// ACEPOWER - OPTIMIZED JAVASCRIPT
// ========================================

// TYPEWRITER EFFECT
const phrase = ["meter.", "electricity.", "usage.", "energy."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeTarget = document.getElementById("typewriter");

function type() {
  const currentWord = phrase[wordIndex];

  if (!isDeleting) {
    typeTarget.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    typeTarget.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % phrase.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 120);
}

// Start typewriter
type();

// ========================================
// NAVBAR SHOW/HIDE ON SCROLL
// ========================================
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.transform = "translateY(0)";
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

function closeMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Open menu on hamburger click
if (hamburger) {
  hamburger.addEventListener('click', openMenu);
}

// Close menu on close button click
if (mobileClose) {
  mobileClose.addEventListener('click', closeMenu);
}

// Close menu when clicking on links
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a, .mobile-download');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
    closeMenu();
  }
});




// ========================================
// TESTIMONIAL CAROUSEL DOTS
// ========================================
const track = document.getElementById('testiScroll');
const dots = document.querySelectorAll('.testi-dot');

if (track && dots.length) {
  track.addEventListener('scroll', () => {
    const cards = track.querySelectorAll('.testi-card');
    const trackLeft = track.getBoundingClientRect().left;
    let activeIndex = 0;
    let minDist = Infinity;

    cards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (dist < minDist) {
        minDist = dist;
        activeIndex = i;
      }
    });

    dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
  }, { passive: true });
}

// ========================================
// AUTO-UPDATE YEAR IN FOOTER
// ========================================
const yearElement = document.getElementById('current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}