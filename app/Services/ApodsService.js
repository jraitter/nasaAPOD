import Apod from "../Models/Apod.js";
import store from "../store.js";


// @ts-ignore
let _api = axios.create({
  baseURL: "//api.nasa.gov/planetary/apod?api_key=tkyPoarXbfFbjhdzhPquVLBfIYq0SXRyYiMsGC3S",
  timeout: 3000
});

class ApodsService {
  constructor() {
    console.log("ApodsService construtore loaded");
  }
  getAPOD() {
    console.log("ApodsService entering getAPOD()");
    _api
      .get("")
      .then(results => {
        console.log("result ", results);
        let apodData = new Apod(results.data);
        store.commit("apod", apodData)
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const apodsService = new ApodsService();
export default apodsService;