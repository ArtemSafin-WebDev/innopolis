import "virtual:svg-icons-register";
import "../scss/style.scss";
import science from "./science";

document.addEventListener("DOMContentLoaded", () => {
  science();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
