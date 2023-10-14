function createSlider(container, nextBtn, prevBtn, slides) {
    let imgIndex = 0;

    function updateSlide() {
        const currentSlide = slides[imgIndex];
        container.style.backgroundImage = `url(assets/images/${currentSlide.urlImage})`;
        container.querySelector('h1').textContent = currentSlide.content;
    }

    function nextSlider() {
        imgIndex = (imgIndex + 1) % slides.length;
        updateSlide();
    }

    function prevSlider() {
        imgIndex = (imgIndex - 1 + slides.length) % slides.length;
        updateSlide();
    }

    nextBtn.addEventListener('click', nextSlider);
    prevBtn.addEventListener('click', prevSlider);
    
    updateSlide();
}

const heroBanner = document.querySelector('.hero__banner');
const nextBtn = document.querySelector('.hero__banner i:nth-child(3)');
const prevBtn = document.querySelector('.hero__banner i:nth-child(1)');
const slides = [
    {
        urlImage: '2.jpg',
        content: 'DOM Practical 2 Slider #2',
    },
    {
        urlImage: '3.jpg',
        content: 'DOM Practical 2 Slider #3',
    },
    {
        urlImage: '4.jpg',
        content: 'DOM Practical 2 Slider #4',
    }
];

createSlider(heroBanner, nextBtn, prevBtn, slides);
