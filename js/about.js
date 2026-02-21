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

// Video Player
const playButton = document.getElementById('playButton');
const videoOverlay = document.getElementById('videoOverlay');
const videoContainer = document.getElementById('videoContainer');
const closeVideoBtn = document.getElementById('closeVideo');
const youtubeVideo = document.getElementById('youtubeVideo');

// Replace this with your actual YouTube video ID
const YOUTUBE_VIDEO_ID = 'jNQXAC9IVRw'; // First YouTube video ever

if (playButton) {
  playButton.addEventListener('click', () => {
    videoOverlay.style.display = 'none';
    videoContainer.style.display = 'block';
    // Add autoplay parameter and enable JS API to fix Error 153
    youtubeVideo.src = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&enablejsapi=1&origin=${window.location.origin}`;
  });
}

if (closeVideoBtn) {
  closeVideoBtn.addEventListener('click', () => {
    videoContainer.style.display = 'none';
    videoOverlay.style.display = 'flex';
    // Stop the video by removing src
    youtubeVideo.src = '';
  });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('newsletterEmail').value.trim();
    
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Show success message
    newsletterForm.style.display = 'none';
    newsletterSuccess.style.display = 'block';
    
    // Reset after 5 seconds
    setTimeout(() => {
      newsletterForm.style.display = 'flex';
      newsletterSuccess.style.display = 'none';
      newsletterForm.reset();
    }, 5000);
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