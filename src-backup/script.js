// Krea Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFeatureCarousel();
  initAppPreview();
});

// Header scroll behavior
function initHeader() {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;

    // Add background on scroll
    if (currentScrollY > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.backdropFilter = 'none';
    }

    // Hide/show on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
}

// Feature carousel
function initFeatureCarousel() {
  const container = document.querySelector('.features-container');
  const prevBtn = document.querySelector('.features-nav-btn:first-child');
  const nextBtn = document.querySelector('.features-nav-btn:last-child');

  if (!container || !prevBtn || !nextBtn) return;

  const cardWidth = 296; // card width + gap

  prevBtn.addEventListener('click', () => {
    container.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  });
}

// App preview interactions
function initAppPreview() {
  const tabs = document.querySelectorAll('.app-tab');
  const sidebarItems = document.querySelectorAll('.app-sidebar-item');

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Sidebar item selection
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Generate button animation
  const generateBtn = document.querySelector('.btn-generate');
  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      generateBtn.innerHTML = `
        <svg class="spinner" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        Generating...
      `;
      generateBtn.disabled = true;

      setTimeout(() => {
        generateBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v18M3 12h18"/></svg>
          Generate
        `;
        generateBtn.disabled = false;
      }, 2000);
    });
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .hero-content, .app-preview').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Add animate-in styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
