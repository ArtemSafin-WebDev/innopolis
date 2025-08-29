import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export default function product() {
  const container = document.querySelector<HTMLElement>(".products__swiper");
  const prevBtn = document.querySelector<HTMLButtonElement>(
    ".products__swiper-button-prev"
  );
  const nextBtn = document.querySelector<HTMLButtonElement>(
    ".products__swiper-button-next"
  );
  if (!container) return null;

  const slider = new Swiper(container, {
    modules: [Navigation],
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },

    speed: 800,
    spaceBetween: 24,
    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
      640: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  });

  window.addEventListener("load", () => {
    slider?.update();
  });
}
