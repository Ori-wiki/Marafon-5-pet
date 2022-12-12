const item = document.querySelector(".item");
const placeholder = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholder.forEach((el) => {
  el.addEventListener("dragover", dragover);
  el.addEventListener("dragenter", dragenter);
  el.addEventListener("dragleave", dragleave);
  el.addEventListener("drop", drop);
});

function dragstart() {
  this.classList.add("hold");
  setTimeout(() => this.classList.add("hide"), 0);
}
function dragend() {
  this.classList.remove("hold", "hide");
}
function dragover(evt) {
  evt.preventDefault();
}
function dragenter() {
  this.classList.add("hovered");
}
function dragleave() {
  this.classList.remove("hovered");
}
function drop() {
  this.classList.remove("hovered");
  this.append(item);
}
