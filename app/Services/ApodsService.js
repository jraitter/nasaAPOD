import Apod from "../Models/Apod.js";
import store from "../store.js";


// @ts-ignore
let _api = axios.create({
  baseURL: "//api.nasa.gov/planetary/",
  timeout: 5000
});

class ApodsService {
  getRandomApod() {
    _api
      .get(`apod?api_key=tkyPoarXbfFbjhdzhPquVLBfIYq0SXRyYiMsGC3S&date=${randomDate()}`)
      .then(results => {
        console.log("result ", results);
        let apodData = new Apod(results.data);
        store.commit("apod", apodData)
      })
      .catch(error => {
        console.error(error);
      });
  }
  constructor() {
    console.log("ApodsService construtore loaded");
  }
  getAPOD() {
    console.log("ApodsService entering getAPOD()");
    _api
      .get("apod?api_key=tkyPoarXbfFbjhdzhPquVLBfIYq0SXRyYiMsGC3S")
      .then(results => {
        console.log("result ", results);
        let apodData = new Apod(results.data);
        store.commit("apod", apodData)
      })
      .catch(error => {
        console.error(error);
      });
  }
  getApodByQuery(query) {

  }
}

function randomDate() {
  let start = new Date(1995, 5, 16)
  let end = new Date()
  let f = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${f.getFullYear()}-${f.getMonth() + 1}-${f.getDate()}`
}


const apodsService = new ApodsService();
export default apodsService;