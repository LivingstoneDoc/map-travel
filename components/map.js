import { uiElements } from "./ui-components.js";

export const mapComponent = () => {
    const points = [
        { x: 155, y: 340 },
        { x: 115, y: 265 },
        { x: 95, y: 180 },
        { x: 120, y: 100 },
        { x: 185, y: 115 } 
    ];
      
    let currentPoint = 0;
    
    const movingToUniversity = () => {
    uiElements.universityBtn.removeAttribute('disabled', '');
        if (currentPoint < points.length) {
            uiElements.universityBtn.setAttribute('disabled', '');
            uiElements.girl.style.opacity = 0;
            setTimeout(() => {
            uiElements.girl.style.bottom = `${points[currentPoint].x}px`;
            uiElements.girl.style.left = `${points[currentPoint].y}px`;
            uiElements.girl.style.opacity = 1;
            currentPoint++;
            setTimeout(movingToUniversity, 500); 
            }, 500);    
        }
    }
    
    uiElements.universityBtn.addEventListener('click', () => {
    currentPoint = 0;
    movingToUniversity();
    });
}