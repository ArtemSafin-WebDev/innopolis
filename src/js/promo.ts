import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper/modules";

export default function promo() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".promo"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      speed: 1000,
      modules: [Navigation, EffectFade],
      spaceBetween: 0,
      autoHeight: true,
      //   effect: "fade",
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
  });
}
