import "virtual:svg-icons-register";
import "../scss/style.scss";
import science from "./science";
import cooperation from "./cooperation";
import faculties from "./faculties";
import initTextTruncation from "./textTruncation";
import ticker from "./ticker";
import education from "./education";
import technologies from "./technologies";
import products from "./products";
import menu from "./menu";
import yandexMaps from "./yandexMaps";
import promo from "./promo";
import accordions from "./accordions";
import reviews from "./reviews";
import tabs from "./tabs";
import stages from "./stages";

document.addEventListener("DOMContentLoaded", () => {
  science();
  ticker();
  products();
  education();
  technologies();
  menu();
  cooperation();
  faculties();
  initTextTruncation();
  yandexMaps();
  promo();
  accordions();
  tabs();
  reviews();
  stages();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
