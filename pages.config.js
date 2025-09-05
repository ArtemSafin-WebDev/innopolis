import bachelor from "./pages-data/bachelor";
import home from "./pages-data/home";
import science from "./pages-data/home";
import magistracy from "./pages-data/magistracy";
import masterOnline from "./pages-data/masterOnline";


const pagesConfig = {
  ...home,
  ...science,
  ...magistracy,
  ...bachelor,
  ...masterOnline,
};

export default pagesConfig;
