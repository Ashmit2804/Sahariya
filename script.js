document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize Components
    initNavbarBehavior();
    initMobileMenu();
    initSlideshow();
    initScrollAnimations();
});

// --- NAVBAR BEHAVIOR (Shrink & Smart Hide) ---
function initNavbarBehavior() {
    const navbar = document.getElementById('main-nav');
    let lastScrollY = window.scrollY;
    let scrollTicking = false;

    window.addEventListener('scroll', function() {
        if (!scrollTicking) {
            window.requestAnimationFrame(function() {
                // Shrink and Blur on scroll
                if (window.scrollY > 50) {
                    navbar.classList.add('py-2', 'backdrop-blur-lg', 'bg-opacity-90', 'navbar-scrolled');
                    navbar.classList.remove('py-3');
                } else {
                    navbar.classList.add('py-3');
                    navbar.classList.remove('py-2', 'backdrop-blur-lg', 'bg-opacity-90', 'navbar-scrolled');
                }

                // Smart hide on scroll down, show on scroll up
                if (window.scrollY > lastScrollY && window.scrollY > 400) {
                    navbar.classList.add('-translate-y-full');
                } else {
                    navbar.classList.remove('-translate-y-full');
                }

                lastScrollY = window.scrollY;
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });
}

// --- MOBILE MENU (Creative Toggle) ---
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLines = [
        document.querySelector('.menu-line-1'),
        document.querySelector('.menu-line-2'),
        document.querySelector('.menu-line-3')
    ];
    
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
        
        if (menuOpen) {
            mobileMenu.classList.remove('-translate-y-full');
            mobileMenu.classList.add('translate-y-0');
            document.body.style.overflow = 'hidden';
            
            // Animate Hamburger to X
            menuLines[0].classList.add('rotate-45', 'translate-y-2');
            menuLines[1].classList.add('opacity-0', 'translate-x-5');
            menuLines[2].classList.add('-rotate-45', '-translate-y-2');
        } else {
            mobileMenu.classList.remove('translate-y-0');
            mobileMenu.classList.add('-translate-y-full');
            document.body.style.overflow = 'auto';
            
            // Animate X to Hamburger
            menuLines[0].classList.remove('rotate-45', 'translate-y-2');
            menuLines[1].classList.remove('opacity-0', 'translate-x-5');
            menuLines[2].classList.remove('-rotate-45', '-translate-y-2');
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => { if (menuOpen) toggleMenu(); });
    });
}

// --- HERO SLIDESHOW ---
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slideshow-dots');
    const counterDisplay = document.querySelector('.current-slide');
    
    if (!slides.length) return;

    let currentSlide = 0;
    const slideDuration = 6000;
    let slideshowInterval;

    // Create Navigation Dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateUI() {
        // Update Dots
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
        // Update Counter (01, 02, etc)
        if (counterDisplay) {
            counterDisplay.textContent = (currentSlide + 1).toString().padStart(2, '0');
        }
    }

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        updateUI();
        resetInterval();
    }

    function resetInterval() {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(() => goToSlide(currentSlide + 1), slideDuration);
    }

    // Controls
    document.querySelector('.prev-slide')?.addEventListener('click', () => goToSlide(currentSlide - 1));
    document.querySelector('.next-slide')?.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Pause on Hover
    const slideshowRegion = document.querySelector('.slideshow');
    slideshowRegion.addEventListener('mouseenter', () => clearInterval(slideshowInterval));
    slideshowRegion.addEventListener('mouseleave', resetInterval);

    resetInterval();
}

// --- SCROLL ANIMATIONS (Reveal on Scroll) ---
function initScrollAnimations() {
    const observerOptions = { threshold: 0.15 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in-view', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Targets elements with these classes
    document.querySelectorAll('.category-card, .gallery-item, section h2').forEach(el => {
        observer.observe(el);
    });
}
