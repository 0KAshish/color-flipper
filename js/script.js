let colors = [
  { name: "Red", key: "red" },
  { name: "Green", key: "green" },
  { name: "Blue", key: "blue" },
  { name: "Teal", key: "teal" },
];

let tableStr;
function createTable() {
  tableStr = `
        <tr>
          <th>Color Name</th>
          <th>Change color</th>
        </tr>`;

  for (let i = 0; i < colors.length; i++) {
    tableStr += `<tr>
          <td>${colors[i].name}</td>
          <td>
            <button
              class="click-me-btn"
              id="click-btn"
              data-id="${colors[i].key}"
              onclick="changeColor('${colors[i].key}')"
            >
              Click Me
            </button>
          </td>
        </tr>`;
  }
}

createTable();
document.getElementById("color-list").innerHTML = tableStr;

let showColorName = document.getElementById("color-name");
function changeColor(color) {
  document.body.style.backgroundColor = color;
  showColorName.innerText = color;
}

