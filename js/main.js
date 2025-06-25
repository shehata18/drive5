// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Service Data
const services = [
    {
        icon: 'fa-car-alt',
        title: 'حماية الطلاء PPF',
        description: 'حماية كاملة لطلاء سيارتك مع ضمان 5 سنوات',
        originalPrice: '900 ريال',
        discountedPrice: '450 ريال',
        image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        category: 'ppf'
    },
    {
        icon: 'fa-spray-can',
        title: 'نانو سيراميك',
        description: 'طلاء نانو سيراميك احترافي لحماية طويلة المدى',
        originalPrice: '1100 ريال',
        discountedPrice: '550 ريال',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        category: 'ceramic'
    },
    {
        icon: 'fa-car-side',
        title: 'تلميع شامل',
        description: 'تلميع داخلي وخارجي احترافي',
        originalPrice: '1300 ريال',
        discountedPrice: '650 ريال',
        image: 'https://images.unsplash.com/photo-1605515298946-d664191d888d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        category: 'detailing'
    }
];

// Gallery Data
const galleryImages = [
    {
        url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'ppf',
        title: 'حماية PPF لسيارة BMW'
    },
    {
        url: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'ceramic',
        title: 'نانو سيراميك لسيارة مرسيدس'
    },
    {
        url: 'https://images.unsplash.com/photo-1605515298946-d664191d888d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'detailing',
        title: 'تلميع شامل لسيارة بورش'
    }
];

// Testimonials Data
const testimonials = [
    {
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        text: 'خدمة ممتازة وجودة عالية في العمل. أنصح الجميع بالتعامل معهم.',
        name: 'محمد أحمد',
        car: 'BMW M4'
    },
    {
        image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        text: 'تجربة رائعة مع فريق محترف. النتيجة فاقت توقعاتي.',
        name: 'عبدالله محمد',
        car: 'مرسيدس AMG'
    }
];

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize Services
function initServices() {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = ''; // Clear existing content

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card premium';
        serviceCard.setAttribute('data-aos', 'fade-up');
        serviceCard.innerHTML = `
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-content">
                <div class="service-icon">
                    <i class="fas ${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="price">
                    <span class="original">${service.originalPrice}</span>
                    <span class="discounted">${service.discountedPrice}</span>
                </div>
                <a href="#contact" class="btn primary">احجز الآن</a>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Initialize Gallery
function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = ''; // Clear existing content

    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${image.category}`;
        galleryItem.setAttribute('data-aos', 'fade-up');
        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Initialize Testimonials
function initTestimonials() {
    const testimonialSlider = document.querySelector('.testimonials-slider');
    testimonialSlider.innerHTML = ''; // Clear existing content

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.setAttribute('data-aos', 'fade-up');
        testimonialCard.innerHTML = `
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.name}">
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
            <h4>${testimonial.name}</h4>
            <span>${testimonial.car}</span>
        `;
        testimonialSlider.appendChild(testimonialCard);
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between bars and times
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Smooth scroll for navigation links
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

// Handle form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت.');
        contactForm.reset();
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                let count = 0;
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps

                function updateCount() {
                    if (count < target) {
                        count += increment;
                        entry.target.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = target;
                    }
                }

                updateCount();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Handle navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initServices();
    initGallery();
    initTestimonials();
    initNavbarScroll();
    initStatsCounter();
}); 