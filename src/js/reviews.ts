import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
export default function reviews() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reviews")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      longSwipesRatio: 0.2,
      modules: [Navigation],
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
