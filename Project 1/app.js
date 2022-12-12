const slides = document.querySelectorAll(".slide");

slides.forEach((element) => {
  element.addEventListener("click", () => {
    cleanScale();
    element.classList.add("active");
  });
});

const cleanScale = () => {
  slides.forEach((element) => {
    element.classList.remove("active");
  });
};
