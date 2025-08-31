import Swiper from "swiper";
import { Navigation} from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

export default function science() {
  const cooperationSlider = document.querySelector<HTMLElement>(
    ".cooperation__content__info__slider"
  );
  if (!cooperationSlider) return null;
  const container = cooperationSlider.querySelector<HTMLElement>(".swiper");
  if (!container) return null;

  return new Swiper(container, {
    speed: 800,
    modules: [Navigation],
    spaceBetween: 0,
    effect: "slide",
    longSwipesRatio: 0.2,
    navigation: {
      prevEl: cooperationSlider.querySelector<HTMLButtonElement>(
        ".slider-arrows__btn--prev"
      ),
      nextEl: cooperationSlider.querySelector<HTMLButtonElement>(
        ".slider-arrows__btn--next"
      ),
    },
  });
}
