const board = document.querySelector("#board");
const colors = [
  "#B22222",
  "#FA8072",
  "#FF69B4",
  "#C71585",
  "#FF6347",
  "#FF8C00",
  "#FFD700",
  "#EE82EE",
  "#DA70D6",
  "#BA55D3",
  "#9400D3",
  "#800080",
  "#483D8B",
  "#800000",
  "#32CD32",
  "#006400",
  "#008B8B",
  "#9ACD32",
  "#3CB371",
  "#4682B4",
  "#1E90FF",
  "#7B68EE",
  "#191970",
  "#2F4F4F",
];
const squareNumber = 500;

for (let i = 0; i < squareNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #1d1d1d";
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
