const images = [
    "https://placehold.co/800x400?text=Slide+1",
    "https://placehold.co/800x400?text=Slide+2",
    "https://placehold.co/800x400?text=Slide+3",
    "https://placehold.co/800x400?text=Slide+4",
    "https://placehold.co/800x400?text=Slide+5",
    "https://placehold.co/800x400?text=Slide+6",
    "https://placehold.co/800x400?text=Slide+7",
];

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const ANIMATION_TIME = 0.5;

const setupSlides = () => {
    slider.innerHTML = '';

    images.forEach((imageSrc, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.dataset.index = index;

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Slide ${index + 1}`;
        slide.appendChild(img);
        slider.appendChild(slide);
    });

    // Дублируем первый и последний слайды для плавного зацикливания
    const firstClone = slider.firstElementChild.cloneNode(true);
    const lastClone = slider.lastElementChild.cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.firstChild);
}

const initSlider = () => {
    const slideWidth = slider.firstElementChild.offsetWidth;
    slider.style.transition = 'none';
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
}

const goToNextSlide = () => {
    const slideWidth = slider.firstElementChild.offsetWidth;

    currentIndex++;
    slider.style.transition = `translate ${ANIMATION_TIME}s ease-in-out`;
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;

    if (currentIndex >= images.length) {
      nextBtn.disabled = true;
    }

    // После завершения анимации возвращаемся к первому слайду
    slider.addEventListener(
        'transitionend',
        () => {
            if (currentIndex >= images.length) {
                currentIndex = 0;
                slider.style.transition = 'none';
                slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
                nextBtn.disabled = false;
            }
        },
        { once: true }
    );
}

const goToPrevSlide = () => {
    const slideWidth = slider.firstElementChild.offsetWidth;

    currentIndex--;
    slider.style.transition = `translate ${ANIMATION_TIME}s ease-in-out`;
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;

    // После завершения анимации возвращаемся к последнему слайду
    slider.addEventListener(
        'transitionend',
        () => {
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
                slider.style.transition = 'none';
                slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
            }
        },
        { once: true }
    );
}

nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

setupSlides();
initSlider();

window.addEventListener('resize', initSlider);
