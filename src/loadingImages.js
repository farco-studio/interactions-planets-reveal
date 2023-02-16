import { gsap } from "gsap";

const items = document.querySelectorAll('ul li');
const images = document.querySelectorAll('.planets-container img');

const loadingImages = () => {
  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      images.forEach((image, imageIndex) => {
        if (imageIndex === index) {
          gsap.to(image, { opacity: 1, duration: 0.5 });
          gsap.to(item, { opacity: 1, duration: 0.5 })
        } else {
          gsap.to(image, { opacity: 0, duration: 0.5 });
          gsap.to(items[imageIndex], { opacity: 0.5, duration: 0.5 })
        }
      });
    });
    item.addEventListener('mouseleave', () => {
      images.forEach((image) => {
        gsap.to(image, { opacity: 0, duration: 0.5 });
        item.style.opacity = 0.5;
      });
    });
    item.addEventListener('mousemove', (e) => {
      const img = images[index];
      gsap.to(img, { x: e.offsetX * 0.1, y: e.offsetY * 0.1, duration: 0.2 });
    });    
  });
};

export {loadingImages};