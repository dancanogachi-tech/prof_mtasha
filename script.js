// ============================================================
// script.js – smooth scroll & interactive enhancements
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ----- smooth scroll for internal anchor links (hero CTA) -----
  const ctaLink = document.querySelector('.btn-cta');
  if (ctaLink) {
    ctaLink.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // ----- optional: nav link active state highlight on scroll -----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', function () {
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
        // Also handle index.html home link
        if (link.getAttribute('href') === 'index.html' && window.scrollY < 100) {
          link.classList.add('active');
        }
      });
    });
  }

  // ----- Service card hover animation enhancement -----
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  });

  // ----- Video placeholder click simulation -----
  const videoPlaceholders = document.querySelectorAll('.video-placeholder');
  videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
      // Simulate video play - in production would open video modal or play video
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.color = '#e6c9a8';
        icon.style.transition = 'color 0.3s';
        setTimeout(() => {
          icon.style.color = '';
        }, 500);
      }
      // Show a friendly alert (demo purpose)
      alert('🎬 Video playback would start here. In production, this would open a video modal or play the video.');
    });
  });

  // ----- Mobile menu toggle (optional enhancement) -----
  // If you want a hamburger menu for mobile, uncomment and add a button
  // For now, the nav is responsive with flex-wrap

  // ----- WhatsApp float pulse animation on scroll -----
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    let isVisible = true;
    window.addEventListener('scroll', function() {
      // If user scrolls to bottom, subtle pulse effect
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        whatsappFloat.style.animation = 'pulse 1.5s ease-in-out 3';
        setTimeout(() => {
          whatsappFloat.style.animation = '';
        }, 5000);
      }
    });
  }

  // ----- Console greeting -----
  console.log('🌿 Professor Mtasha – Herbal Medicine Expert');
  console.log('📞 Contact: +254 756 3888786');
});