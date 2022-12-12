class Slider {
  constructor(slider, indexSlides = 0) {
    this._slider = slider;
    this._slides = this._slider.querySelectorAll(".slide");
    this._index = indexSlides;
  }
  _clean() {
    this._slides.forEach((element) => {
      element.classList.remove("active");
    });
  }
  setEventListeners() {
    this._slides.forEach((element) => {
      element.addEventListener("click", () => {
        this._clean();
        element.classList.add("active");
      });
    });
  }
  startSlide() {
    this._slides[this._index].classList.add("active");
  }
}
const sliderContainer = document.querySelector(".container");
const slider = new Slider(sliderContainer);
slider.setEventListeners();
slider.startSlide();
