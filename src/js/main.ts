import "virtual:svg-icons-register";
import "../scss/style.scss";
import science from "./science";
import product from "./product";

document.addEventListener("DOMContentLoaded", () => {
  science();
  product();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
