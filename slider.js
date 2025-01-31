import { uiElements } from "./ui-components.js";

export const sliderComponent = () => {
    let currentSliderIndex = 0;
    const totalSlides = uiElements.slides.length;

    const nextSlide = () => {
    const slidesOnPage = 8;
    let countSlides = slidesOnPage + currentSliderIndex;

    if (countSlides < totalSlides) {
        currentSliderIndex++;
    }
    if (countSlides === totalSlides) {
        currentSliderIndex = 0;
    }
    updateSlidePosition();
    }
    uiElements.arrowRight.addEventListener('click', nextSlide);

    const prevSlide = () => {
    if (currentSliderIndex > 0) {
        currentSliderIndex--;
    }
    updateSlidePosition();
    }
    uiElements.arrowLeft.addEventListener('click', prevSlide);

    const updateSlidePosition = () => {
        const slideWidth = uiElements.slides[0].clientWidth;
        const offset = -currentSliderIndex * slideWidth;
        uiElements.slider.style.transform = `translateX(${offset}px)`;
    }
}