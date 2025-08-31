import Swiper from "swiper";
import {
  Navigation,
  EffectFade,
  EffectCreative,
  Controller,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/controller";

export default function technologies() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".technologies")
  );
  elements.forEach((element) => {
    let textInstance: Swiper | null = null;
    let cardsInstance: Swiper | null = null;
    const textContainer = element.querySelector<HTMLElement>(
      ".technologies__text-slider .swiper"
    );

    const cardsContainer = element.querySelector<HTMLElement>(
      ".technologies__cards-slider .swiper"
    );

    if (textContainer) {
      textInstance = new Swiper(textContainer, {
        speed: 600,
        modules: [Navigation, EffectFade, Controller],
        spaceBetween: 0,
        autoHeight: true,
        loop: false,
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
    }

    if (cardsContainer) {
      cardsInstance = new Swiper(cardsContainer, {
        speed: 600,
        effect: "creative",
        longSwipesRatio: 0.2,
        centeredSlides: true,
        slideToClickedSlide: true,
        loop: false,
        creativeEffect: {
          next: {
            translate: ["70%", 0, 0],
            scale: 0.8,
            shadow: false,
            origin: "left center",
          },
          prev: {
            translate: ["-70%", 0, 0],
            scale: 0.8,
            shadow: false,
            origin: "right center",
          },
        },
        modules: [EffectCreative, Controller],
      });
    }

    if (textInstance && cardsInstance) {
      textInstance.controller.control = cardsInstance;
      cardsInstance.controller.control = textInstance;
    }

    window.addEventListener("load", () => {
      textInstance?.updateAutoHeight();
    });
  });
}
