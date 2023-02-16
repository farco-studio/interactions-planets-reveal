import { cursorComponent } from "./cursor";
import { loadingImages } from "./loadingImages";
import { textIntro } from "./textIntro";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const init = () => {
  loadingImages();
  textIntro();

  if (!isMobile) {
    cursorComponent();
  }
};

init();
