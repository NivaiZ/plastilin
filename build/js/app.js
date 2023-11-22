import { contentSlider } from "./modules/contentSlider.js";
import { teamSlider } from "./modules/teamSlider.js";

function handleDOMContentLoaded() {
  contentSlider();
  teamSlider();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
