import "virtual:svg-icons-register";
import "../scss/style.scss";
import science from "./science";
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
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
