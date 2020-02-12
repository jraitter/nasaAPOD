export default class Apod {
  constructor(data) {
    this.title = data.title;
    this.date = data.date;
    this.url = data.url;
    this.explanation = data.explanation;
  }
  /** 
   * @returns string
   */
  get Template() {
    return `
<div class="card">
  <img src="${this.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.explanation}</p>
  </div>
</div>
    `
  }
}