import bachelor from "./pages-data/bachelor";
import home from "./pages-data/home";
import science from "./pages-data/home";
import masterOnline from "./pages-data/masterOnline";

const pagesConfig = {
  ...home,
  ...science,
  ...bachelor,
  ...masterOnline,
};

export default pagesConfig;
