let hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let colorName = document.getElementById("color-name");
let colorContainer = [];
const colorBox = document.getElementById("color-box");

function randomColor() {
  return Math.floor(Math.random() * hex.length);
}

function clickMe() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomColor()];
    document.body.style.backgroundColor = hexCode;
    colorName.textContent = hexCode;
  }
  return colorContainer.push(hexCode);
}

function lockColor() {
  let lastColor = colorContainer.length - 1;
  colorBox.innerHTML += `
   <div class="generated-color">
          <div id="cc">${colorContainer[lastColor]}</div>
          <div id="cp" style="background:${colorContainer[lastColor]}"></div>
        </div>
  `;
}
