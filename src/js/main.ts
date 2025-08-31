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

document.addEventListener("DOMContentLoaded", () => {
  science();
  ticker();
  products();
  education();
  technologies();
   cooperation();
  faculties();
  initTextTruncation();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
