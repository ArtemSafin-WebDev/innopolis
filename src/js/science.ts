import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

export default function science() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".science")
  );
  elements.forEach((element) => {
    const pubSlider = element.querySelector<HTMLElement>(
      ".science__pub-slider"
    );
    const scientistsSlider = element.querySelector<HTMLElement>(
      ".science__scientists-slider"
    );
    const sliders = [pubSlider, scientistsSlider].map((item) => {
      if (!item) return null;
      const container = item?.querySelector<HTMLElement>(".swiper");
      if (!container) return null;

      return new Swiper(container, {
        speed: 800,
        modules: [Navigation, EffectFade],
        spaceBetween: 0,
        autoHeight: true,
        effect: "fade",
        longSwipesRatio: 0.2,
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          prevEl: item.querySelector<HTMLButtonElement>(
            ".slider-arrows__btn--prev"
          ),
          nextEl: item.querySelector<HTMLButtonElement>(
            ".slider-arrows__btn--next"
          ),
        },
      });
    });

    window.addEventListener("load", () => {
      sliders.forEach((slider) => slider?.updateAutoHeight());
    });
  });
}
