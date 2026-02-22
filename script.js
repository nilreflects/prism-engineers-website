// Three.js 3D Background with elegant particles
let scene, camera, renderer, particles, mouse = { x: 0, y: 0 };

function init3D() {
    const canvas = document.getElementById('canvas3d');
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1a1f2e, 0.002);
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create elegant particle system
    const geometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 200;
        positions[i + 1] = (Math.random() - 0.5) * 200;
        positions[i + 2] = (Math.random() - 0.5) * 200;
        
        // Gold/bronze color palette
        const colorChoice = Math.random();
        if (colorChoice < 0.7) {
            colors[i] = 0.78; // R
            colors[i + 1] = 0.66; // G
            colors[i + 2] = 0.51; // B (gold)
        } else {
            colors[i] = 1;
            colors[i + 1] = 1;
            colors[i + 2] = 1; // white
        }
        
        sizes[i / 3] = Math.random() * 2;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles with mouse influence
    particles.rotation.x += 0.0002 + mouse.y * 0.00003;
    particles.rotation.y += 0.0003 + mouse.x * 0.00003;
    
    renderer.render(scene, camera);
}

// Mouse movement for interactive 3D
document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Parallax effect for hero background layers
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxLayers = document.querySelectorAll('.hero-bg-layer');
    const heroContent = document.querySelector('.hero-content');
    
    parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(scrolled * speed);
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
    
    if (heroContent) {
        const speed = heroContent.getAttribute('data-speed') || 0.2;
        const yPos = -(scrolled * speed);
        heroContent.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP ScrollTrigger Setup
gsap.registerPlugin(ScrollTrigger);

// Sync Lenis with ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Parallax Image Effect
gsap.utils.toArray('.parallax-image').forEach((image) => {
    gsap.to(image, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: image.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach((el) => {
    revealObserver.observe(el);
});

// Project Cards Stagger Animation
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
            projectObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach((card) => {
    projectObserver.observe(card);
});

// Service Cards Stagger Animation
const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            serviceObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

serviceCards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    serviceObserver.observe(card);
});

// Animated counter for stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

// Stats Counter Observer for new stats section
function animateStatCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target >= 50 ? 'M' : '+');
        }
    };
    
    updateCounter();
}

const statCards = document.querySelectorAll('.stat-card-number');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStatCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

statCards.forEach(stat => {
    statsObserver.observe(stat);
});

// Hero Stats Counter Animation
function animateHeroStat(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2500;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target < 100 ? '+' : '%');
        }
    };
    
    updateCounter();
}

// Animate hero stats on page load
setTimeout(() => {
    document.querySelectorAll('.hero-stat-number').forEach(stat => {
        animateHeroStat(stat);
    });
}, 1000);

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // In production, send to your backend
    console.log('Form submitted:', data);
    
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.5
            });
        }
    });
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Initialize 3D scene when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init3D);
} else {
    init3D();
}

// Lazy loading optimization
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
