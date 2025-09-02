import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function ourTeam() {
  const ourTeam = document.querySelector<HTMLElement>(
    ".our-team__swiper"
  );
  const container = ourTeam?.querySelector<HTMLElement>(".swiper");
  const prev = document?.querySelector<HTMLButtonElement>(
    ".our-team__control-prev"
  );
  const next = document?.querySelector<HTMLButtonElement>(
    ".our-team__control-next"
  );

  if (!container) return null;

  const slider = new Swiper(container, {
    modules: [Navigation],
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    speed: 800,
    longSwipesRatio: 0.2,
    slidesPerView: 4,
    spaceBetween: 24,
    autoHeight: false,
  });

  window.addEventListener("load", () => {
    slider?.update();
  });
}
