function changeColor() {
  document.getElementById("mainTitle").style.color = getColor();
}

function getColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
