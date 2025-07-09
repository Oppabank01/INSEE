// Hero Section Slider
(function () {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    const slider = document.querySelector('.hero-slider');
    let current = 0;
    const interval = 5000; // 5 seconds
    let timer;

    // Prevent drag image on hero images
    document.querySelectorAll('.hero-img').forEach(img => {
        img.addEventListener('dragstart', e => e.preventDefault());
    });

    // --- Swipe/Drag Effect ---
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let sliderWidth = window.innerWidth;

    function setPosition(translate) {
        slider.style.transform = `translateX(${translate}px)`;
    }

    function animate() {
        setPosition(currentTranslate);
        if (isDragging) requestAnimationFrame(animate);
    }

    function getPositionX(e) {
        return e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    }

    function onDragStart(e) {
        isDragging = true;
        slider.classList.add('dragging');
        startX = getPositionX(e);
        prevTranslate = -current * sliderWidth;
        currentTranslate = prevTranslate;
        animationID = requestAnimationFrame(animate);
    }

    function onDragMove(e) {
        if (!isDragging) return;
        const x = getPositionX(e);
        const diff = x - startX;
        currentTranslate = prevTranslate + diff;
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        slider.classList.remove('dragging');
        cancelAnimationFrame(animationID);
        // Snap logic
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -sliderWidth / 4 && current < slides.length - 1) {
            current++;
        } else if (movedBy > sliderWidth / 4 && current > 0) {
            current--;
        }
        showSlide(current);
        resetTimer();
    }

    function showSlide(idx) {
        // Move slider
        slider.style.transition = 'transform 0.4s cubic-bezier(.4,1.3,.5,1)';
        slider.style.transform = `translateX(${-idx * sliderWidth}px)`;
        setTimeout(() => {
            slider.style.transition = '';
        }, 400);
        // Set active slide/indicator
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === idx);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, interval);
    }

    function startSlider() {
        sliderWidth = window.innerWidth;
        showSlide(current);
        timer = setInterval(nextSlide, interval);
    }

    // Responsive
    window.addEventListener('resize', () => {
        sliderWidth = window.innerWidth;
        showSlide(current);
    });

    // Mouse & Touch events
    if (slider) {
        slider.addEventListener('mousedown', onDragStart);
        slider.addEventListener('mousemove', onDragMove);
        slider.addEventListener('mouseup', onDragEnd);
        slider.addEventListener('mouseleave', onDragEnd);

        slider.addEventListener('touchstart', onDragStart, { passive: true });
        slider.addEventListener('touchmove', onDragMove, { passive: true });
        slider.addEventListener('touchend', onDragEnd);
    }

    // Indicator Clicks
    indicators.forEach((ind, i) => {
        ind.addEventListener('click', () => {
            current = i;
            showSlide(current);
            resetTimer();
        });
    });

    window.addEventListener('DOMContentLoaded', startSlider);
})();

// Back to top button functionality
const backtopButton = document.getElementById('backtop');
let isScrolling = false;

// Show/hide button based on scroll position with throttling
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 300) {
                backtopButton.classList.add('show');
            } else {
                backtopButton.classList.remove('show');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Smooth scroll to top with easing
backtopButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const duration = 800; // Duration in milliseconds
    const start = window.scrollY;
    const startTime = performance.now();

    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start * (1 - easeInOutCubic(progress)));

        if (progress < 1) {
            window.requestAnimationFrame(scrollStep);
        }
    }

    window.requestAnimationFrame(scrollStep);
});
