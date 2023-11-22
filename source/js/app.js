import { contentSlider } from "./modules/contentSlider.js";
import { teamSlider } from "./modules/teamSlider.js";
import { chosenSlider } from "./modules/chosenSlider.js";
import { maskPhone } from "./modules/iMask.js";
import { validateForm } from "./modules/validateForm.js";

function handleDOMContentLoaded() {
  contentSlider();
  teamSlider();
  chosenSlider();
  maskPhone();
  validateForm();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
