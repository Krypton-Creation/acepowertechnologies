// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (hamburger) hamburger.addEventListener('click', openMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMenu);

const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a, .mobile-download');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
    closeMenu();
  }
});

// FAQ Category Switching
const faqCategories = document.querySelectorAll('.faq-category');
const faqGroups = document.querySelectorAll('.faq-group');

faqCategories.forEach(category => {
  category.addEventListener('click', () => {
    faqCategories.forEach(cat => cat.classList.remove('active'));
    category.classList.add('active');
    
    faqGroups.forEach(group => group.classList.remove('active'));
    
    const targetGroup = category.dataset.category;
    const selectedGroup = document.querySelector(`[data-group="${targetGroup}"]`);
    if (selectedGroup) {
      selectedGroup.classList.add('active');
      
      const faqItems = selectedGroup.querySelectorAll('.faq-item');
      faqItems.forEach((item, index) => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (index === 0) {
          answer.classList.add('active');
          icon.textContent = '−';
          item.classList.add('active');
        } else {
          answer.classList.remove('active');
          icon.textContent = '+';
          item.classList.remove('active');
        }
      });
    }
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = faqItem.querySelector('.faq-icon');
    
    const isActive = answer.classList.contains('active');
    
    if (isActive) {
      answer.classList.remove('active');
      icon.textContent = '+';
      faqItem.classList.remove('active');
    } else {
      answer.classList.add('active');
      icon.textContent = '−';
      faqItem.classList.add('active');
    }
  });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!fullName || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      document.getElementById('email').focus();
      return;
    }
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const subject = encodeURIComponent('Contact Form: ' + fullName);
    const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:contact@acepower.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      alert('Your message has been prepared! Please send it from your email client.');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }, 500);
  });
}

// Auto-update year
const yearElement = document.getElementById('current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Navbar scroll
let lastScroll = 0;
const navbar = document.getElementById("navbar");

if (navbar) {
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
}
