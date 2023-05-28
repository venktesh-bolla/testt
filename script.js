// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animations
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('reveal');
        } else {
            section.classList.remove('reveal');
        }
    });
};

window.addEventListener('scroll', revealSection);

// Parallax effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        const distanceFromTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        const speed = element.getAttribute('data-parallax-speed');

        if (distanceFromTop < windowHeight && distanceFromTop + elementHeight > 0) {
            element.style.transform = `translateY(${distanceFromTop * speed}px)`;
        }
    });
});

// Slideshow
const slides = document.querySelectorAll('.slideshow-slide');
const slideInterval = 3000; // Interval between slides in milliseconds
let currentSlide = 0;

const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
};

setInterval(nextSlide, slideInterval);

// Scroll reveal for individual elements
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const scrollReveal = () => {
    scrollRevealElements.forEach(element => {
        const distanceFromTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (distanceFromTop < windowHeight - 100) {
            element.classList.add('reveal');
        } else {
            element.classList.remove('reveal');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
