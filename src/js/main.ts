import "virtual:svg-icons-register";
import "../scss/style.scss";
import science from "./science";
import cooperation from "./cooperation";
import faculties from "./faculties";
import initTextTruncation from "./textTruncation";

document.addEventListener("DOMContentLoaded", () => {
  science();
  cooperation();
  faculties();
  initTextTruncation();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
