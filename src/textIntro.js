import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const items = document.querySelectorAll("ul li");
const titleSpan = document.querySelector(".title span");

const staggerInItems = () => {
  gsap.from(items, {
    duration: 2,
    y: 100,
    opacity: 0,
    stagger: 0.1,
    ease: CustomEase.create("custom", "M0,0 C0.96,-0.01 0.15,1 1,1 "),
  });
};

const titleIntro = () => {
  gsap.from(titleSpan, {
    duration: 2,
    y: 100,
    opacity: 0,
    ease: CustomEase.create("custom", "M0,0 C0.96,-0.01 0.15,1 1,1 "),
  });
};

const textIntro = () => {
  staggerInItems();
  titleIntro();
};

export { textIntro };
