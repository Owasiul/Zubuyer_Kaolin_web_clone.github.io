document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create thumbnails dynamically
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = slide.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        
        if (index === 0) {
            thumbnail.classList.add('active');
        }

        thumbnail.addEventListener('click', () => {
            goToSlide(index);
        });

        thumbnailContainer.appendChild(thumbnail);
    });

    const thumbnails = document.querySelectorAll('.thumbnail');

    function goToSlide(slideIndex) {
        // Ensure slide index is within bounds
        currentSlide = (slideIndex + totalSlides) % totalSlides;
        
        // Move slider
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active thumbnail
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Auto slide every 5 seconds
    let autoSlideInterval = setInterval(nextSlide, 5000);
});