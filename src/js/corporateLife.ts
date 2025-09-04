import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";

export default function corporateLife() {
  const corporateLife = document.querySelector<HTMLElement>(
    ".corporate-life__slider"
  );
  const container = corporateLife?.querySelector<HTMLElement>(".swiper");
  const prev = corporateLife?.querySelector<HTMLButtonElement>(
    ".corporate-life__control--prev"
  );
  const next = corporateLife?.querySelector<HTMLButtonElement>(
    ".corporate-life__control--next"
  );

  if (!container) return null;

  const slider = new Swiper(container, {
    modules: [Navigation, EffectFade],
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    fadeEffect: {
      crossFade: true,
    },
    effect: "fade",
    speed: 800,
    longSwipesRatio: 0.2,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: false,
  });

  window.addEventListener("load", () => {
    slider?.update();
  });
}
