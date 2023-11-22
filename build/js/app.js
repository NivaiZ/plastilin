import { contentSlider } from "./modules/contentSlider.js";
import { teamSlider } from "./modules/teamSlider.js";
import { chosenSlider } from "./modules/chosenSlider.js";

function handleDOMContentLoaded() {
  contentSlider();
  teamSlider();
  chosenSlider();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
