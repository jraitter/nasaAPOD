import ValuesController from "./Controllers/ValuesController.js";
import ApodsController from "./Controllers/ApodsController.js";

class App {
  valuesController = new ValuesController();
  apodsController = new ApodsController();

}

window["app"] = new App();
