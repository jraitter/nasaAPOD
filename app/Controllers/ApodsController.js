import ApodsService from "../Services/ApodsService.js"
import store from "../store.js";

//Private
function _draw() {
  let apod = store.State.apod;
  let dataElem = document.getElementById("current-data");
  dataElem.innerHTML = apod.Template;
}

export default class ApodsController {
  constructor() {
    console.log("ApodsController constructor loaded");
    store.subscribe("apod", _draw);

  }
  getAPOD() {
    console.log("ApodsController entering getAPOD()");
    ApodsService.getAPOD();
  }
  getRandomApod() {
    ApodsService.getRandomApod();
  }
}