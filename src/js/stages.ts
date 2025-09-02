import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function stages() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".stages")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const instance = new Swiper(container, {
      speed: 600,
      modules: [Navigation, EffectFade],
      spaceBetween: 0,
      autoHeight: true,
      effect: "fade",
      longSwipesRatio: 0.2,
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".slider-arrows__btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".slider-arrows__btn--next"
        ),
      },
    });

    window.addEventListener("load", () => {
      instance.updateAutoHeight();
    });
  });
}
