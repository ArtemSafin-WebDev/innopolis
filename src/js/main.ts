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
import corporateLife from "./corporateLife";
import ourTeam from "./ourTeam";
import vacancies from "./vacancies";

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
  corporateLife();
  ourTeam();
  vacancies();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
